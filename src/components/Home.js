import { paragraph, article } from 'txtgen';

const Home = () => (
        <div className="m-4">
            <h3>Welcome to our Page</h3>

            <p>
               {paragraph(200)}
            </p>
            <p>{article(3)}</p>
        </div>
);

export default Home;