import 'bootswatch/dist/cerulean/bootstrap.css';
import './styles.css';

const API_URL =


function getQuestions(){
  return fetch(API_URL)
    .then(res => res.json());
}
