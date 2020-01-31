import { AbstractControl, ValidationErrors } from '@angular/forms';
import { resolve } from 'url';
import { promise } from 'protractor';
import { reject } from 'q';



export class passwordValidator {
    static uniquePassword(control:AbstractControl): Promise < ValidationErrors | null > {
        return new Promise ((resolve,reject) => {
            setTimeout (()=>{
                if(control.value !== 'suyash1234')
                    resolve({ uniquePassword: true });
                else
                    resolve(null);
            },300);
        });
    }
}