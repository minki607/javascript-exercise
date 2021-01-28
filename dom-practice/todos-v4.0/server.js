import express from 'express';
import cors from 'cors';

// 서버에서 관리할 투두
let todos = [
    { id: 3, content: 'Javascript', completed: false},
    { id: 2, content: 'CSSs', completed: true},
    { id: 1, content: 'HTML', completed: false},
]

const app = express();
const PORT = 5000;

// Cross Origin Resource Sharing 
// 현재는 필요없지만 추후에 제한된 교차 출처 http 요청을 접근하게 해주려면 필요함
app.use(cors());

// 퍼블릭 폴더에 css, js등 정적파일에 접근이 가능하도록 해줌
app.use(express.static('public'));

// json으로 된 요청 body를 받아올수 있도록 해줌 
app.use(express.json());

app.get('/todos', (req, res) => {
    res.send(todos);
})

app.post('/todos', (req, res) => {
    // TODO: 페이로드가 비었을때 
    
    // 페이로드가 비었을때
    // 아이디가 중복이 아닐때 
})

app.listen(PORT, () => console.log(`server running on ${PORT}`))