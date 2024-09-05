import { v4 as uuidv4 } from 'uuid';

export async function createProduct({ dbClient, data }) {
  try {
    await uploadFile(dbClient, data.file);
    data._id = uuidv4();
    await insertProduct(dbClient, data);
    return data;
  } catch (error) {
    throw error;
  }
}

export async function getProducts(dbClient) {
  const { data, error } = await dbClient.from('products').select('*');
  if (error) {
    throw new Error('error fetching products');
  }
  return data;
}

export async function getProduct(dbClient, id) {
  const { data, error } = await dbClient
    .from('products')
    .select('*')
    .eq('_id', id);
  if (error) {
    throw new Error('error fetching product');
  }
  return data;
}

export async function updateProduct({ dbClient, id, data }) {
  console.log(id);
  const productData = await getProduct(dbClient, id);
  console.log('productData', productData);

  if (data.file) {
    await uploadFile(dbClient, data.file);
    await removeFile(dbClient, productData[0].file_name);
    data.image_url = await getPublicUrl(dbClient, data.file.name);
    delete data.file;
  }

  console.log('despues de uplodear', data);
  const { data: updatedProductData, error } = await dbClient
    .from('products')
    .update(data)
    .eq('_id', id)
    .select();

  if (error) {
    console.log('error updating product', error);
    throw new Error('error updating product');
  }
  return updatedProductData[0];
}

export async function deleteProduct(dbClient, id) {
  const { data: productData, error: productError } = await dbClient
    .from('products')
    .select('file_name')
    .eq('_id', id);

  await removeFile(dbClient, productData[0].file_name);

  const { data, error } = await dbClient
    .from('products')
    .delete()
    .eq('_id', id);

  if (error) {
    throw new Error('error deleting product');
  }
  return data;
}

async function uploadFile(dbClient, file) {
  try {
    if (!file) {
      throw new Error('No file provided');
    }

    console.log(file);

    const { data, error } = await dbClient.storage
      .from('images')
      .upload(`public/${file.name}`, file, {
        cacheControl: '3600',
        upsert: false,
      });

    if (error) {
      console.error('Error details:', error);
      throw new Error('Error uploading image');
    }

    return data;
  } catch (error) {
    console.error('Caught error:', error);
    throw error;
  }
}

async function removeFile(dbClient, fileName) {
  const { data, error } = await dbClient.storage
    .from('images')
    .remove(`public/${fileName}`);

  if (error) {
    throw new Error('error removing image');
  }
}

async function getPublicUrl(dbClient, fileName) {
  const { data: url } = await dbClient.storage
    .from('images')
    .getPublicUrl(`public/${fileName}`);

  return url.publicUrl;
}

async function insertProduct(dbClient, data) {
  const url = await getPublicUrl(dbClient, data.file.name);
  delete data.file;
  data.image_url = url;
  console.dir(data.file, {depth: null} )
  const { data: productData, error } = await dbClient
    .from('products')
    .insert(data);
  if (error) {
    throw new Error('error inserting product');
  }
  return productData;
}
