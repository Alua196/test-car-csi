
import React, { useState } from 'react';

import './products.css';
import productsData from '../data/productsData';

import { Container, Row, Col } from 'reactstrap';


const Products = () => {


    const [products, setProducts] = useState([
        {
            id: 1,
            prodName: 'Кузов',
            price: 11000,
            quantity: 1,
            subProducts: [
                {
                    id: 1.1,
                    prodName: 'Двери',
                    price: 11000,
                    quantity: 1,
                    subsubProducts: [
                        {
                            id: 1.11,
                            prodName: 'Замок',
                            price: 5000,
                            quantity: 1
                        },
                        {
                            id: 1.12,
                            prodName: 'Ручки',
                            price: 6000,
                            quantity: 1
                        },
                    ],
                },
                {
                    id: 1.2,
                    prodName: 'Sub Product 2',
                    price: 3,
                    quantity: 1
                },
            ],
        },
        {
            id: 2,
            prodName: 'Двигатель',
            price: 12000,
            quantity: 1,
            subProducts: [
                {
                    id: 2.1, 
                    prodName: 'Поршни', 
                    price: 10000,
                    quantity: 1
                },
                {
                    id: 2.2, 
                    prodName: 'Кольца', 
                    price: 2000,
                    quantity: 1
                },
                {
                    id: 2.3, 
                    prodName: 'Sub Product 5', 
                    price: 2,
                    quantity: 1
                },
            ],
        },
        // Add more products with sub-products as needed
    ]);

    const calculateSubProductCost = (subProduct) => {
        if (subProduct.subsubProducts && subProduct.subsubProducts.length > 0) {
          return subProduct.subsubProducts.reduce((sum, subSubProduct) => {
            return sum + subSubProduct.price * subSubProduct.quantity;
          }, 0) * subProduct.quantity;
        } else {
          return subProduct.price * subProduct.quantity;
        }
      };
      

    const calculateProductCost = (product) => {
        if (product.subProducts) {
          return product.subProducts.reduce((sum, subProduct) => {
            return sum + calculateSubProductCost(subProduct);
          }, 0);
        } else {
          return 0;
        }
      };
      
      const totalCost = products.reduce((sum, product) => sum + calculateProductCost(product), 0);
      


    // const totalCost = products.reduce(
    //     (sum, product) =>
    //         sum +
    //         product.price * product.quantity,
    //     0
    // );


    const handleAdd = (productId) => {
        setProducts((prevProducts) =>
          prevProducts.map((product) => {
            if (product.id === productId) {
              const updatedProduct = { ...product, quantity: product.quantity + 1 };
      
              if (product.subProducts) {
                const updatedSubProducts = product.subProducts.map((subProduct) => {
                  const updatedSubSubProducts = subProduct.subsubProducts
                    ? subProduct.subsubProducts.map((subSubProduct) => ({
                        ...subSubProduct,
                        quantity: subSubProduct.quantity + 1,
                      }))
                    : subProduct.subsubProducts;
      
                  const updatedSubProduct = {
                    ...subProduct,
                    quantity: subProduct.quantity + 1,
                    subsubProducts: updatedSubSubProducts,
                  };
                  return updatedSubProduct;
                });
      
                const updatedProductWithSubProducts = {
                  ...updatedProduct,
                  subProducts: updatedSubProducts,
                };
                return updatedProductWithSubProducts;
              }
      
              return updatedProduct;
            }
      
            return product;
          })
        );
      };
      
      const handleDelete = (productId) => {
        setProducts((prevProducts) =>
          prevProducts.map((product) => {
            if (product.id === productId) {
              const updatedProduct = { ...product, quantity: product.quantity - 1 };
      
              if (product.subProducts) {
                const updatedSubProducts = product.subProducts.map((subProduct) => {
                  const updatedSubSubProducts = subProduct.subsubProducts
                    ? subProduct.subsubProducts.map((subSubProduct) => ({
                        ...subSubProduct,
                        quantity: Math.max(subSubProduct.quantity - 1, 0),
                      }))
                    : subProduct.subsubProducts;
      
                  const updatedSubProduct = {
                    ...subProduct,
                    quantity: Math.max(subProduct.quantity - 1, 0),
                    subsubProducts: updatedSubSubProducts,
                  };
                  return updatedSubProduct;
                });
      
                const updatedProductWithSubProducts = {
                  ...updatedProduct,
                  subProducts: updatedSubProducts,
                };
                return updatedProductWithSubProducts;
              }
      
              return updatedProduct;
            }
      
            return product;
          })
        );
      };
      

      const handleSubAdd = (productId, subProductId) => {
        setProducts((prevProducts) =>
          prevProducts.map((product) => {
            if (product.id === productId && product.subProducts) {
              const updatedSubProducts = product.subProducts.map((subProduct) => {
                if (subProduct.id === subProductId) {
                  const updatedSubProduct = {
                    ...subProduct,
                    quantity: subProduct.quantity + 1,
                  };
      
                  if (subProduct.subsubProducts) {
                    const updatedSubSubProducts = subProduct.subsubProducts.map(
                      (subSubProduct) => ({
                        ...subSubProduct,
                        quantity: subSubProduct.quantity + 1,
                      })
                    );
      
                    updatedSubProduct.subsubProducts = updatedSubSubProducts;
                  }
      
                  return updatedSubProduct;
                }
      
                return subProduct;
              });
      
              const updatedProduct = {
                ...product,
                subProducts: updatedSubProducts,
              };
      
              return updatedProduct;
            }
      
            return product;
          })
        );
      };
      
      const handleSubDelete = (productId, subProductId) => {
        setProducts((prevProducts) =>
          prevProducts.map((product) => {
            if (product.id === productId && product.subProducts) {
              const updatedSubProducts = product.subProducts.map((subProduct) => {
                if (subProduct.id === subProductId) {
                  const updatedSubProduct = {
                    ...subProduct,
                    quantity: Math.max(subProduct.quantity - 1, 0),
                  };
      
                  if (subProduct.subsubProducts) {
                    const updatedSubSubProducts = subProduct.subsubProducts.map(
                      (subSubProduct) => ({
                        ...subSubProduct,
                        quantity: Math.max(subSubProduct.quantity - 1, 0),
                      })
                    );
      
                    updatedSubProduct.subsubProducts = updatedSubSubProducts;
                  }
      
                  return updatedSubProduct;
                }
      
                return subProduct;
              });
      
              const updatedProduct = {
                ...product,
                subProducts: updatedSubProducts,
              };
      
              return updatedProduct;
            }
      
            return product;
          })
        );
      };
      
      const handleSubSubAdd = (productId, subProductId, subSubProductId) => {
        setProducts((prevProducts) =>
          prevProducts.map((product) => {
            if (product.id === productId && product.subProducts) {
              const updatedSubProducts = product.subProducts.map((subProduct) => {
                if (subProduct.id === subProductId && subProduct.subsubProducts) {
                  const updatedSubSubProducts = subProduct.subsubProducts.map(
                    (subSubProduct) => {
                      if (subSubProduct.id === subSubProductId) {
                        return {
                          ...subSubProduct,
                          quantity: subSubProduct.quantity + 1,
                        };
                      }
      
                      return subSubProduct;
                    }
                  );
      
                  const updatedSubProduct = {
                    ...subProduct,
                    subsubProducts: updatedSubSubProducts,
                  };
      
                  return updatedSubProduct;
                }
      
                return subProduct;
              });
      
              const updatedProduct = {
                ...product,
                subProducts: updatedSubProducts,
              };
      
              return updatedProduct;
            }
      
            return product;
          })
        );
      };
      
      const handleSubSubDelete = (productId, subProductId, subSubProductId) => {
        setProducts((prevProducts) =>
          prevProducts.map((product) => {
            if (product.id === productId && product.subProducts) {
              const updatedSubProducts = product.subProducts.map((subProduct) => {
                if (subProduct.id === subProductId && subProduct.subsubProducts) {
                  const updatedSubSubProducts = subProduct.subsubProducts.map(
                    (subSubProduct) => {
                      if (subSubProduct.id === subSubProductId) {
                        return {
                          ...subSubProduct,
                          quantity: Math.max(subSubProduct.quantity - 1, 0),
                        };
                      }
      
                      return subSubProduct;
                    }
                  );
      
                  const updatedSubProduct = {
                    ...subProduct,
                    subsubProducts: updatedSubSubProducts,
                  };
      
                  return updatedSubProduct;
                }
      
                return subProduct;
              });
      
              const updatedProduct = {
                ...product,
                subProducts: updatedSubProducts,
              };
      
              return updatedProduct;
            }
      
            return product;
          })
        );
      };
      


    return <section className='prod__sec'>
        <Container>
            <Row>
                <Col lg='9'>
                    <table className='table boarded'>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Детали</th>
                                <th>Цена</th>
                                <th>Количество</th>
                                <th>Стоимость</th>
                                <th>Действия</th>
                            </tr>
                        </thead>

                        <tbody>
                            {products.map((product) => (
                                <React.Fragment key={product.id}>
                                    <tr>
                                        <td>{product.id}</td>
                                        <td>{product.prodName}</td>
                                        <td>{product.price}</td>
                                        <td>{product.quantity}</td>
                                        <td>{calculateProductCost(product)}</td>
                                        <td>
                                            <div className="quantity-counter">
                                                <button className="btn btn-success" onClick={() => handleAdd(product.id)}>Добавить</button>
                                                <button className="btn btn-danger" onClick={() => handleDelete(product.id)}>Убрать</button>
                                            </div>
                                        </td>
                                    </tr>
                                    {product.subProducts.map((subProduct) => (
                                        <React.Fragment key={subProduct.id}>
                                            <tr>
                                                <td>{subProduct.id}</td>
                                                <td>{subProduct.prodName}</td>
                                                <td>{subProduct.price}</td>
                                                <td>{subProduct.quantity}</td>
                                                <td>{calculateSubProductCost(subProduct)}</td>
                                                <td>
                                                    <div className="quantity-counter">
                                                        <button className="btn btn-success" onClick={() => handleSubAdd(product.id, subProduct.id)}>Добавить</button>
                                                        <button className="btn btn-danger" onClick={() => handleSubDelete(product.id, subProduct.id)}>Убрать</button>
                                                    </div>
                                                </td>
                                            </tr>

                                            {subProduct.subsubProducts?.map((subsubProduct) => (
                                                <tr key={subsubProduct.id}>
                                                    <td>{subsubProduct.id}</td>
                                                    <td>{subsubProduct.prodName}</td>
                                                    <td>{subsubProduct.price}</td>
                                                    <td>{subsubProduct.quantity}</td>
                                                    <td>{subsubProduct.price * subsubProduct.quantity}</td>
                                                    <td>
                                                        <div className="quantity-counter">
                                                            <button className="btn btn-success" onClick={() => handleSubSubAdd(product.id, subProduct.id, subsubProduct.id)}>Добавить</button>
                                                            <button className="btn btn-danger" onClick={() => handleSubSubDelete(product.id, subProduct.id, subsubProduct.id)}>Убрать</button>
                                                        </div>
                                                    </td>
                                                </tr>
                                            ))}
                                        </React.Fragment>
                                    ))}

                                </React.Fragment>
                            ))}
                        </tbody>
                    </table>
                </Col>

                <Col lg='3'>
                    <div>
                        <h6 className='d-flex align-items-center justify-content-between'>
                            Subtotal
                            <span className='fs-4 fw-bold'>{totalCost}₸</span>
                        </h6>

                    </div>
                </Col>
            </Row>
        </Container>
    </section>
}

export default Products;