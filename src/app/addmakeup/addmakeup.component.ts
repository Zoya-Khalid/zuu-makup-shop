import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ProductService } from '../core/services/product.service';

@Component({
  selector: 'app-addmakeup',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './addmakeup.component.html',
  styleUrl: './addmakeup.component.scss',
})
export class AddmakeupComponent implements OnInit {
  makeupForm!: FormGroup;
  constructor(private fb: FormBuilder, private productService: ProductService) {
    this.makeupForm = this.fb.group({
      id: new FormControl('', [Validators.required]),
      name: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required]),
    });
  }

  ngOnInit() {}

  onSubmit() {
    if (this.makeupForm.valid) {
      this.productService.addProduct(this.makeupForm.value);
    } else {
      this.makeupForm.markAllAsTouched();
    }
  }
}
