import { LoginComponent } from './login-page/login.component';
import { LoginRoutingModule } from './login-routing.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
    declarations: [LoginComponent],
    imports: [CommonModule, FormsModule, ReactiveFormsModule, LoginRoutingModule],
})
export class LoginModule {}
