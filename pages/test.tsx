import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Dropzone from 'react-dropzone';

interface MyProps {

}

export interface MyState {


    files: any,

}

class Test extends React.Component<MyProps, MyState> {

    constructor(props) {
        super(props);
        this.state = {
            files: {}

        };

        this.handleClick = this.handleClick.bind(this);
        //this.sendReauest = this.sendReauest.bind(this);
        this.handleChange = this.handleChange.bind(this)
        //this.Xfetch = this.Xfetch.bind(this)


    };


    /* onDrop = (acceptedFiles) => {
         fetch('http://localhost:3000/', {
 
             method: "POST",
             body: this.getFormData({
                 file: acceptedFiles[0]
             }),
 
 
         })
 
             .then(response => response.json())
             .then(response => {
                 // you will get response here 
             });
     }
     getFormData(object = {}) {
         const formData = new FormData();
         Object.entries(object).forEach(([key, value]) =>
             formData.append(key, value)
         );
         console.log(formData)
         return formData;
     }*/


    //return fetch(fullUrl, params)
    //.then((response) => {
    //return response.json().then((json) => ({ json, response }));
    // }).then(({ json, response }) =>
    //Promise.resolve({
    // success: response.ok ? true : false,
    // response: json
    // })
    // );


    handleChange(event) {
        this.setState({ files: event.target.files[0] })
    }

    handleClick(event) {

        let fullUrl = 'http://localhost:3000' + '/' + 'api/upload/file';
        const params: any = {
            method: 'POST',
            headers: {
                Authorization: 'bearer',
                //'Content-type': 'multipart/form-data; boundary: ****************'

            },
        };

        const formData = new FormData();
        formData.append("files", this.state.files);


        params['headers']['content-type'] = 'multipart/form-data; boundary={boundary string}';
        params['body'] = formData;
        console.log(params)
        return fetch(fullUrl, params)
            .then((res) => console.log(res))
            .catch((err) => (err));





        //const headers = { 'Content-Type': 'multipart/form-data' }
        // let fullUrl = "/api/upload/file"
        //const params: any = {
        // method: "POST",
        // credentials: 'include',
        // headers: headers
        //};
        //this.Xfetch(params, fullUrl, this.state.files)
    }

    /* Xfetch(params, fullUrl, data) {
         let fd = new FormData();
         fd.append('file', data)
 
         params['body'] = fd
         console.log()
 
         //console.log(data, "data")
         //console.log(JSON.stringify({ data }), "json")
         return fetch(fullUrl, params)
             .then(res => {
                 res
             })
             .catch(e => {
                 console.log('Error', e)
             })
 
     }
 
      handleClick(event) {
          const requestURL = "/api/upload/file" // Запросы будут по данному url
          this.sendReauest('POST', requestURL, {
              file: this.state.files
          })
              .then(data => console.log(data))
              .catch(err => console.log(err))
      }
      sendReauest(method, url, body = null) {
          const headers = { 'Content-Type': 'multipart/form-data' }
          return fetch(url, { method: method, body: body, headers: headers })    // Пост запрос
              .then(res => {
              })
              .catch(e => {
                  console.log('Error', e)
              })
      }*/
    render() {
        return (
            <div>
                <h1>Upload file</h1>
                <div>
                    <label>Файл</label><br />
                    <input type="file" name="files" onChange={this.handleChange} /><br /><br />
                    <button type="button" onClick={this.handleClick}>
                        Кнопка
                    </button>
                </div>
            </div>
        );
    }
}
export default Test;
