import React, { Component } from 'react';

import NewsItems from './NewsItems';
import Spinner from './Spinner';
import PropTypes from 'prop-types'





export class News extends Component {
    static defaultProps = {
      country :"in",
      pageSize : 6
    
      }

    static PropsTypes = {
        country :PropTypes.string,
        pageSize : PropTypes.number,
        category :PropTypes.string
      }

    constructor() {
      super();
      this.state = {
          articles : [],
          loading : true,
          page:1,
          totalResults:[],
          name:""
      }
  }
       async componentDidMount(){
         let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=&category=${this.props.category}&apiKey=71ddfbfcf8a9479597e2b00b59f034f4&page=1&pageSize=${this.props.pageSize}`
        fetch(url).then((res) => res.json())
        .then((json) => { 
            this.setState({
                articles: json.articles,
                loading: false,
                totalResults:json.totalResults
            });
        })
       }
       handlePrevious =()=>{
         console.log("clicked on previous button");
         let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=&category=${this.props.category}&apiKey=71ddfbfcf8a9479597e2b00b59f034f4&page=${this.state.page -1}&pageSize=${this.props.pageSize}`
         this.setState({loading : true})
        fetch(url).then((res) => res.json())
        .then((json) => {
            this.setState({
                articles: json.articles,
                loading: false,
                page :this.state.page - 1
            });
        })
       }
       handleNext = ()=>{
        console.log("clicked on next button");
        if(this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize)){
          
        }
        else{
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=&category=${this.props.category}&apiKey=71ddfbfcf8a9479597e2b00b59f034f4&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`
        this.setState({loading : true})
        fetch(url).then((res) => res.json())
        .then((json) => {
            this.setState({
                articles: json.articles,
                loading: false,
                page :this.state.page + 1
            });
        })}

       }
     
     
    render() {
      
        return (
            <div className="container my-3 ">
                <h1 className="text-center text-success mx-3">MonkeyNews Top hedalines</h1>
               {this.state.loading && <Spinner/>} 
                <div className="row ">
                { this.state.articles.map((item)=>{
                    return <NewsItems  key={item.url} title={item.title?item.title.slice(0,30):""}description={item.description?item.description.slice(0,50):""} imgUrl={item.urlToImage} newsUrl={item.url} />
                 
                })}
               <div className="container d-flex justify-content-between buttons">
               <button disabled={this.state.page<=1} type="button"  className="btn  btn-dark" onClick={this.handlePrevious}> &laquo;Previous</button>
               <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize)} type="button" className="btn  btn-dark" onClick={this.handleNext}>Next &raquo;</button>
               </div>
                    
                </div>
               
               
            </div>
        )
    }
}

export default News
