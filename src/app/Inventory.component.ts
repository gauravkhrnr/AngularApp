import { Component } from '@angular/core'; 
import { Router }  from '@angular/router';  

@Component ({  
   selector: 'my-app',  
   templateUrl: 'inventory.html' 
})  

export class AppInventory {  
   constructor(private _router: Router){} 

   onBack(): void { 
      this._router.navigate(['/Product']); 
   } 
}