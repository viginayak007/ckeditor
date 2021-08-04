/*
* ckeditor custom adaptar for image upload
*
*
*/
export class UploadAdapter {
  public loader: any;
  public url: string = `http://localhost:3000/file`;

  constructor(loader) {
    this.loader = loader;
  }

  upload() {
    return new Promise(async (resolve, reject) => {
      this.loader.file.then((file) => {
        this.addImage(resolve, reject,file)
      });
    });
  }

  addImage(resolve, reject, file){
    let formData: any = new FormData();
    formData.append("file", file);
    // Make a POST request
    fetch(this.url, {
    	method: 'POST',
      body: formData
    }).then(function (response) {
      console.log(response);
    	if (response.ok) {
    		return response.json();
    	}
    	return Promise.reject(response);
    }).then(function (data) {
      console.log(data);
    	resolve(data);
    }).catch(function (error) {
    	console.warn('Something went wrong.', error);
      reject(error)
    });
  };
}
