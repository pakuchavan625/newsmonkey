import React, { Component } from 'react'
import '../Styles/news.css'
export class NewsItems extends Component {
   
    render() {
        let {title,description,imgUrl,newsUrl,name}=this.props;
        return (
              
                 
                        <div className="col-lg-3 mx-3 my-5">
                        <div className="card" style={{width: "18rem"}}>
                        <img src={!imgUrl?"https://feeds.abplive.com/onecms/images/uploaded-images/2021/11/12/766bb08f601d6aa59cefdc29f52c9b67_original.jpg?impolicy=abp_cdn&imwidth=1200&imheight=628":imgUrl} className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">{title}</h5>
                            <p className="card-text">{description}</p>
                            <h5 className="card-newnam">{name}</h5>
                            <a href={newsUrl}  className="btn btn-sm btn-dark">Read more</a>
                        </div>
                       </div>
                        </div>
                  
                
           
        )
    }
}

export default NewsItems
