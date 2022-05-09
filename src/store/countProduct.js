/* eslint-disable */
import { defineStore } from 'pinia'
export const usecountCart =
    defineStore({
        id: 'counter',
        state: () => ({
            product: 0
        }),
        actions: {
            addToCart(id, qty = 1) {
                const data = {
                    product_id: id,
                    qty: qty
                }
                $.ajax({
                    url: `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/products/all`,
                    data: data,
                    type: "POST",
                    dataType: "json",
                    success: function(returnData) {
                        console.log(returnData);
                    },
                    error: function(xhr, thrownError) {
                        console.log(xhr.status);
                        console.log(thrownError);
                    }
                })
            }
        }
    })