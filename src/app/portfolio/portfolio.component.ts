import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent  {
  visibleDetail: boolean = false;
  capturedImage: any;
  images: any[] = [];
  visibleEdit: boolean = false;

 constructor(){
   this.images = [
     {
       "name": "Unicorn",
       "description": "A majestic unicorn in a mystical forest",
       "src": "/assets/images/p-1.jpg",
       "id": 1,
       "alt": "Unicorn",
       "resolution": "1920x1080",
       "dateTaken": "2023-11-01",
       "location": "Enchanted Forest"
     },
     {
       "name": "Dandelion",
       "description": "Close-up of a vibrant dandelion in a meadow",
       "src": "/assets/images/p-2.jpg",
       "id": 2,
       "alt": "Dandelion",
       "resolution": "1280x720",
       "dateTaken": "2023-11-02",
       "location": "Meadow"
     },
     {
       "name": "Blue Butterfly",
       "description": "A beautiful blue butterfly in a garden",
       "src": "/assets/images/p-3.jpg",
       "id": 3,
       "alt": "Blue Butterfly",
       "resolution": "1920x1080",
       "dateTaken": "2023-11-03",
       "location": "Butterfly Garden"
     },
     {
       "name": "Green Butterfly",
       "description": "An exquisite green butterfly on a flower",
       "src": "/assets/images/p-4.jpg",
       "id": 4,
       "alt": "Green Butterfly",
       "resolution": "1280x720",
       "dateTaken": "2023-11-04",
       "location": "Botanical Garden"
     },
     {
       "name": "Dewdrops On Dandelions",
       "description": "Glistening dewdrops on delicate dandelion seeds",
       "src": "/assets/images/p-5.jpg",
       "id": 5,
       "alt": "Dewdrops On Dandelions",
       "resolution": "1920x1080",
       "dateTaken": "2023-11-05",
       "location": "Morning Meadow"
     },
     {
       "name": "Dandelion Puffball",
       "description": "A fluffy dandelion puffball ready to disperse its seeds",
       "src": "/assets/images/p-5.jpg",
       "id": 6,
       "alt": "Dandelion Puffball",
       "resolution": "1280x720",
       "dateTaken": "2023-11-06",
       "location": "Wildflower Field"
     }
   ];
 }


  showDialog(image: any) {
    this.capturedImage = { ...image };
    this.visibleDetail = true;
  }

  showEditDialog(image: any) {
    // Create a deep copy of the image so you can edit it without modifying the original
    this.capturedImage = { ...image };
    this.visibleEdit = true;
  }

  saveEdit() {
    const index = this.images.findIndex((image) => image.id === this.capturedImage.id);

    if (index !== -1) {
      this.images[index] = { ...this.capturedImage };
    }

    this.visibleEdit = false;
  }

  cancelEdit() {
    this.visibleEdit = false;
  }

 

 }



