import React from "react";
import axios from "axios";
import CustomerList from "../components/customerList";

export default class Customer extends React.Component{
    constructor() {
        super()
        this.state = {
            customers: [],

        }
        if(localStorage.getItem('token')){
            this.state.token = localStorage.getItem('token')
        }
        else{
            window.location = '/login'
        }
    }

    getCustomer = () => {
        let url = "http://localhost:8080/store/customer"

        axios.get(url)
        .then(res => {
            this.setState({
                customers: res.data.customer
            })
        })
        .catch(err =>{
            console.log(err.message)
        })
    }

    componentDidMount = () => {
        this.getCustomer()
    }

    render() {
        return(
            <div className='container'>
                <div className='row mt-5'>
                    <h5>Data customer</h5>
                </div>
                <div>
                    <div className="row">
                        {this.state.customers.map((item, index) => {
                            return(
                            <CustomerList key={index}
                                nameImage={item.image}
                                image={"http://localhost:8080/image/customer/" + item.image}
                                name={item.name}
                                phone={item.phone}
                                address={item.address}
                                onEdit={() => this.handleEdit(item)}
                                onDrop={() => this.handleDrop(item.customer_id)}
                                />
                            )
                        })}
                    </div>
                </div>
            </div>
        )
    }
}