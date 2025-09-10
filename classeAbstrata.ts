abstract class MediaStreamType{

    protected titulo; 
    protected autor;
    protected timeInSeconds;
    protected status: 'Tocando' | 'Parado' | 'Pausado';

    constructor(titulo: string, autor: string, timeInSeconds: number){
        this.autor = autor;
        this.titulo = titulo;
        this.timeInSeconds =  timeInSeconds;
        this.status = this.status;
    }

    play(): void{

        if(this.status !== 'Tocando'){
            this.status = 'Tocando';

            console.log(`Tocando ${this.titulo} by ${this.autor}`);
        }
        
    }

    pause(): void{
        if(this.status === 'Tocando'){
            this.status = 'Pausado';

            console.log(`Pausado ${this.titulo}`);

        }
    }

    stop(): void{
        if(this.status !== 'Parado'){
            this.status = 'Parado';

            console.log(`Parando ${this.titulo}`);
        }
    }


}