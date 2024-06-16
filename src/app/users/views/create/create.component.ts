import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { State, User } from '../../interfaces/user';
import { UserService } from '../../service/user.service';
import { Router } from '@angular/router';
import { catchError, finalize, of, tap } from 'rxjs';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent {

  userForm: FormGroup;
  states = Object.values(State);

  constructor(private fb: FormBuilder, private userService: UserService, private router: Router) {
    this.userForm = this.fb.group({
      name: ['', Validators.required],
      country: ['', Validators.required],
      email: ['', Validators.required],
      state: [State.ACTIVE, Validators.required]
    });
  }

  onSubmit(): void {
    if (this.userForm.valid) {
      const newUser: User = this.userForm.value;

      // pipe: Permite encadenar múltiples operadores de RxJS para transformar,
      // manejar errores, y realizar acciones adicionales en el flujo de datos.
      this.userService.createUser(newUser).pipe(
        // tap operador para realizar una acción en caso de éxito
        tap(response => {
          console.log('User created:', response);
          this.router.navigate(['/users']); // Redirigir a la lista de usuarios o donde desees
        }),
        // catchError operador para manejar errores
        catchError(error => {
          console.error('Error creating user:', error);
          // manejar el error
          return of(null); // Retornar un observable nulo o una acción alternativa
        }),
        // finalize operador para realizar una acción sin importar el resultado
        finalize(() => {
          console.log('Request completed'); // Opcional: realizar alguna acción después de que la petición termine
        })
      ).subscribe();
    }
    }

}
