import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { MainService } from './../../services/main.service'

@Component({
  selector: 'app-add-items',
  templateUrl: './add-items.component.html',
  styleUrls: ['./add-items.component.css']
})
export class AddItemsComponent implements OnInit {

  constructor(private fb: FormBuilder,private router: Router,private mainServices :MainService) { }
  productForm: FormGroup;
  cityList = []
  ngOnInit(): void {
     /* Initiate the form structure */
    this.productForm = this.fb.group({
      selling_points: this.fb.array([this.fb.group({firstName:'',lastName:'',contactNo:'',city:''})])
    })
    this.mainServices.getCities().subscribe(
      (res : any)=> {
        this.cityList = res.data
      },(error:any)=>{
        console.log(error);
      }
    );
  }

  get sellingPoints() {
    return this.productForm.get('selling_points') as FormArray;
  }

  /////// This is new /////////////////

  addRow() {
    this.sellingPoints.push(this.fb.group({firstName:'',lastName:'',contactNo:'',city:''}));
    console.log(this.sellingPoints);
    
  }

  delete(index) {
    this.sellingPoints.removeAt(index);
    console.log(this.sellingPoints);

  }

  submit(){
    let formData
    if(localStorage.getItem('data')){
       formData = [  ...this.sellingPoints.value , ...JSON.parse(localStorage.getItem('data'))]

    }else{
       formData = [  ...this.sellingPoints.value]
    }

    localStorage.setItem('data',JSON.stringify(formData))
    this.router.navigate(['/list']);

  }

  numberOnly(event): boolean {
    const charCode = (event.which) ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }
    return true;

  }
}
