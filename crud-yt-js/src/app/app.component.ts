import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgIf, NgFor } from '@angular/common'; // necessário se você estiver usando *ngIf e *ngFor
import { DomSanitizer } from '@angular/platform-browser'; // Importando DomSanitizer

@Component({
  selector: 'app-root',
  standalone: true, // Marcando como standalone
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [FormsModule, NgIf, NgFor] // Importar outros módulos necessários, como FormsModule
})
export class AppComponent {
  youtubeUrl: string = '';
  savedVideos: string[] = [];
  selectedVideo: string | null = null; // Adicionando a propriedade para o vídeo selecionado
  errorMessage: string | null = null; // Propriedade para a mensagem de erro
  
  constructor(public sanitizer: DomSanitizer) {} // Tornando sanitizer público

  playVideo() {
    if (this.isValidYouTubeUrl(this.youtubeUrl)) {
      this.savedVideos.push(this.youtubeUrl);
      this.youtubeUrl = '';
      this.errorMessage = null; // Limpa a mensagem de erro
    } else {
      this.errorMessage = 'URL do YouTube inválida.'; // Mensagem de erro formatada
    }
  }

  deleteVideo(index: number) {
    this.savedVideos.splice(index, 1); // Usar splice para remover o vídeo pelo índice
    this.selectedVideo = null; // Limpa a seleção ao excluir o vídeo
  }

  playSelectedVideo(videoUrl: string) {
    this.selectedVideo = videoUrl;
  }

  // Função para validar a URL do YouTube
  isValidYouTubeUrl(url: string): boolean {
    const youtubeRegex = /^(https?:\/\/)?(www\.)?(youtube\.com|youtu\.?be)\/.+$/;
    return youtubeRegex.test(url);
  }

  getEmbedUrl(videoUrl: string): string {
    const videoId = this.extractVideoId(videoUrl);
    return `https://www.youtube.com/embed/${videoId}`;
  }

  // Extraindo o ID do vídeo da URL
  private extractVideoId(url: string): string {
    const urlParts = url.split(/\/|=/);
    return urlParts[urlParts.length - 1]; // Retorna o último componente que geralmente é o ID
  }
}
