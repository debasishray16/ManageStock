import React from 'react';
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Feature } from '@/components/Feature';

export default function Home() {
  return (
    <div>

      <Header />

      <div className="container bg-blue-400 mx-auto">
        <h1 className="text-3xl font-bold mb-6">Add a product</h1>

        <form>
          <div className="mb-4">
            <label htmlFor="productName" className="block mb-2">Product Name</label>
            <input type="text" id="productName" className="w-full border border-gray-300 px-4 py-2" />
          </div>

          <div className="mb-4">
            <label htmlFor="quantity" className="block mb-2">Quantity</label>
            <input type="number" id="quantity" className="w-full border border-gray-300 px-4 py-2" />
          </div>

          <div className="mb-4">
            <label htmlFor="price" className="block mb-2">Price</label>
            <input type="number" id="price" className="w-full border border-gray-300 px-4 py-2" />
          </div>


          <button type="submit" className="bg-blue-500 text-white px-4 py-2">Add Product</button>
        </form>



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
    </div>
  );
}
