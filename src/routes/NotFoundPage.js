import {Link} from 'react-router';

const NotFoundPage = () => {
  return (
    <div>
      <section style={{display:"flex",flexDirection:"column",alignItems:"center",margin:"20px"}}>
        <span>We can't find that page</span>
        <Link 
            to="/"
            className="designer-link"
            >Return to home page
        </Link>
      </section>
    </div>
  )
}

export default NotFoundPage
