import Link from 'next/link';
import Card from 'react-bootstrap/Card';
import MovieDetails from '@/components/MovieDetails';
import PageHeader from '@/components/PageHeader';

export function getStaticProps() {
    // Call an external API endpoint to get posts
    return new Promise((resolve,reject)=>{
      fetch('https://fine-puce-dolphin-gown.cyclic.app/api/movies/573a13baf29313caabd506e4').then(res=>res.json()).then(data=>{
        resolve({ props: { movie: data } })
      })
    })
  }
  

export default function About(props) {
    return (
      <>
      <PageHeader text="About the Developer: Oscar Li" />
      <Card className="bg-light">
        <Card.Body>
          <p>
            My name is Oscar. I inspire to be a FullStack Software Developer. I enjoy playing games on my computer and mobile.
          </p>
          <p>
            The sport I enjoy is Volleyball. At the moment, I work as a line cook at a brunch restaurant.
          </p>
          <p>
            The Movie that I enjoy the most is
            {' '}
            <Link href={`/movies/${props.movie.title}`} legacyBehavior>
              <a>{props.movie.title}</a>
            </Link>
          </p>
        </Card.Body>
      </Card>
      <br />
      <MovieDetails movie={props.movie} />
      </>
    );
  }