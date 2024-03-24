"use client"
import React from 'react';
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Feature } from '@/components/Feature';
import { useState, useEffect } from 'react';


export default function Home() {

  const [productForm, setProductForm] = useState({})

  const addProduct = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('/api/product', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(productForm) });


      if (response.ok) {
        console.log('Product added successfully');
      }
      else {
        console.error('Error adding product');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  }


  const handleChange = (e) => {
    setProductForm({ ...productForm, [e.target.name]: e.target.value })
  }

  return (
    <div>

      <Header />

      <div className="container bg-blue-300 mx-auto">
        <h1 className="text-3xl font-bold mb-6">Search a Product</h1>
        <div className="flex mb-6">
          <input type="text" placeholder="Enter the product name" className=" border flex-grow border-gray-300 px-4 py-2" />
          <select className="border border-gray-300 px=4 py=2 rounded-r-md">
            <option value="">All</option>
            <option value="category1">Category 1</option>
            <option value="Category2">Category 2</option>
          </select>
        </div>
      </div>


      <div className="container bg-blue-200 mx-auto">
        <h1 className="text-3xl font-bold mb-6">Add a product</h1>

        <form>
          <div className="mb-4">
            <label htmlFor="productName" className="block mb-2">Product Slug</label>
            <input name="slug" onChange={handleChange} type="text" id="productName" className="w-full border border-gray-300 px-4 py-2" />
          </div>

          <div className="mb-4">
            <label htmlFor="quantity" className="block mb-2">Quantity</label>
            <input name="quantity" onChange={handleChange} type="number" id="quantity" className="w-full border border-gray-300 px-4 py-2" />
          </div>

          <div className="mb-4">
            <label htmlFor="price" className="block mb-2">Price</label>
            <input name="price" onChange={handleChange} type="number" id="price" className="w-full border border-gray-300 px-4 py-2" />
          </div>


          <button onClick={addProduct} type="submit" className="bg-blue-500 text-white px-4 py-2">Add Product</button>
        </form>
      </div>



      <div className="container my-6 bg-gray-300 mx-auto">
        <h1 className="text-3xl font-bold mb-6">Display current stock</h1>

        <table className="table-auto w-full">
          <thead>
            <tr>
              <th className="px-4 py-2"> Product Name </th>
              <th className="px-4 py-2">Quantity</th>
              <th className="px-4 py-2">Price</th>
            </tr>
          </thead>

          <tbody>

            <tr>
              <td className="border px-4 py-2">Product A</td>
              <td className="border px-4 py-2">10</td>
              <td className="border px-4 py-2">$19.99</td>
            </tr>

            <tr>
              <td className="border px-4 py-2">Product B</td>
              <td className="border px-4 py-2">5</td>
              <td className="border px-4 py-2">$9.99</td>
            </tr>

          </tbody>
        </table>

      </div>

      <Footer />
    </div >
  );
}
