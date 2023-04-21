import CardGallery from './CardGallery';

function Home({props}){
    return (
        <div className="container text-center">
            <h1>{props.entries[0].title}</h1>
            <CardGallery props={props} />
        </div>
        
    )
}

export default Home;