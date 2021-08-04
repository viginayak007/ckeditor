import { Component, VERSION } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import htmlDoc from './doc';
// import htmlDoc from './base64sample';
import Editor from './ckCustom/build/ckeditor';
import { UploadAdapter } from './upload-adapter';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  profileForm: FormGroup = this.formBuilder.group({
     body: [
       {
         value: '',
         disabled: false
       },
       Validators.required
     ]
   });
   public Editor = Editor;
   // public Editor = ClassicEditor;
   config = {
     placeholder: '  ',
     title: {
        placeholder: '  ',
        isContextPlugin : false
     },
     image: {
      resizeUnit: "%",
      resizeOptions: [ {
        name: 'resizeImage:original',
        value: null,
        icon: 'original'
      },
      {
        name: 'resizeImage:25',
        value: '25',
        icon: 'small'
      },
      {
        name: 'resizeImage:50',
        value: '50',
        icon: 'medium'
      },
      {
        name: 'resizeImage:75',
        value: '75',
        icon: 'large'
      } ],
      toolbar: [ 'resizeImage:25', 'resizeImage:50', 'resizeImage:75', 'resizeImage:original',
        'imageTextAlternative',
        'imageStyle:inline',
        'imageStyle:block',
        'imageStyle:side'
      ],
      styles: {
        options: [
          'inline', 'alignLeft', 'alignRight',
          'alignCenter', 'alignBlockLeft', 'alignBlockRight',
          'block', 'side'
        ]
      }
    },
     toolbar: {
       items: [
         'heading',
         '|',
         '|',
         'bold',
         'italic',
         '|',
         'link',
         '|',
         'bulletedList',
         'numberedList',
         '|',
         'insertTable',
         '|',
         'outdent',
         'indent',
         '|',
         'uploadImage',
         'blockQuote',
         '|',
         'undo',
         'redo'
       ],
     },
     // simpleUpload: {
     //     // The URL that the images are uploaded to.
     //     uploadUrl: 'http://localhost:3000/file',
     //     // Enable the XMLHttpRequest.withCredentials property.
     //      withCredentials: false,
     //     // Headers sent along with the XMLHttpRequest to the upload server.
     //        headers: {
     //          'Content-Type': 'application/json;',
     //        }
     //
     //
     //
     // }
   };

   constructor(private formBuilder: FormBuilder) {}

   view() {
     console.log(this.profileForm.value.body);
   }

   // onReady(editor: any) {
   //   editor.plugins.get("FileRepository").createUploadAdapter = (loader) => {
   //     return new UploadAdapter(loader);
   //   };
   //   editor.ui
   //     .getEditableElement()
   //     .parentElement.insertBefore(
   //       editor.ui.view.toolbar.element,
   //       editor.ui.getEditableElement()
   //     );
   // }

}
