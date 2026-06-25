import { db } from "@/db";

export async function getProductFromDB() {
    try {

        const [product] = await db.execute("select * from products")
        return product;

    } catch (error) {
        throw error;
    }
}

export async function createProductInDB(product: any) {
    try {

        const query = `
            INSERT INTO products (title, price, description, category, image, rating) 
            VALUES (?, ?, ?, ?, ?, ?)
        `

        const [result] = await db.execute(query, [
            product.title,
            product.price,
            product.description,
            product.category,
            product.image,
            JSON.stringify(product.rating)
        ])
        return result;

    } catch (error) {
        throw error;
    }
}

export async function getSingleProductFromDB(id: string) {

    try {


        const [product]: any = await db.execute("SELECT * FROM products WHERE id = ?", [id]);
        return product;
    } catch (error) {
        throw error;

    }
}

export async function updateProductInDB(id: string, product: any) {

    try {

        const query = "UPDATE products SET title = ?, price = ?, description = ?, category = ?, image = ?, rating = ? WHERE id = ?";

        const [result] = await db.execute(query, [
            product.title,
            product.price,
            product.description,
            product.category,
            product.image,
            JSON.stringify(product.rating),
            id
        ]);
        return result;
    }
    catch (error) {
        throw error;
    }
}


export async function deleteProductFromDB(id: string) {
    try {
        const [result] = await db.execute('DELETE FROM products WHERE id = ?', [id]);
        return result;
    } catch (error) {
        throw error;
    }
}