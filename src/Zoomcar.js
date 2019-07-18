import React, { Component } from 'react'
import City from './City';
import Checkbox from './Checkbox';

export default class Zoomcar extends Component {
    constructor(props){
        super(props);
        this.state={city:[],isLoaded:false,checkbox:['hd_enabled','one_way_enabled'],list:[]}
    
    }

    componentDidMount()
    {
        this.filter=new Set();

        fetch("https://api.zoomcar.com/v4/cities?platform=web")
          .then(res => res.json())
          .then(
            (result) => {
                console.log(result.cities)
              this.setState({
                isLoaded: true,
                city:[...result.cities]
              });
            },
            
            (error) => {
              this.setState({
                isLoaded: true,
                error
              });
            }
          )
      }

      filterOnChange=(e)=>{
          if(this.filter.has(e.target.value)){
            this.filter.delete(e.target.value)
          }
          else {
            this.filter.add(e.target.value)
          }
      this.setState({list:Array.from(this.filter)})
      
        }      
    
        getFilteredList=(list,city)=>{
            let localcity=[];
            list.map((lang)=>{
            city.filter((item)=>{
                    if(lang==='hd_enabled'||lang==='one_way_enabled'){
                        if(item[lang]===true){
                            if(localcity.indexOf(item)===-1){
                                localcity.push(item)
                            }
                          }
                    }
                 
                })
              })
              return localcity;
        }

    
    render() {
        const {city,checkbox,list}=this.state;
        let zoomcity=[]
        if(list.length===0){
            zoomcity=city;
          
              }
              else{
                zoomcity=this.getFilteredList(list,city);
            }
        return (
            <div className="card-wrapper">
        {checkbox.map((list)=><Checkbox key={list} val={list} _onChange={this.filterOnChange} />)}
            <div className="card-holder">
                {zoomcity.map((list)=><City key={list.name} data={list}/>)};
            </div>
            </div>
        )
    }
}
