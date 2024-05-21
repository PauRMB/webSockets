

import { Injectable } from '@angular/core';
    import { Socket } from 'ngx-socket-io';



@Injectable(
  {
    providedIn: 'root'
  })



export class WebsocketService
  {
 // Atributos o Propiedades
    public socketStatus: boolean = false;


 // El constructor
    constructor( private socket: Socket )
      {
        this.checkStatus();
      }


 // METODOS

 // Metodo para revisar el estatus de la conexion con el Servidor de Sockets
 // Quiero saber cuando se conecta y cuando se desconecta el servidor
    public checkStatus()
      {
     // Estos son observables
     
     // Para detectar cuando se conecta
        this.socket.on( 'connect', () =>
                          {
                            console.log( 'Conectado al Servidor de Sockets' );
                            this.socketStatus = true;
                          }
                      );

     // Para detectar cuando se desconecta
        this.socket.on( 'disconnect', () =>
                            {
                              console.log( 'Desconectado al Servidor de Sockets' );
                              this.socketStatus = false;
                            }
                        );
      }

  }
