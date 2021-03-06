import * as React from 'react';
import {Layout} from '../components/layout';
import {Header} from '../components/header/header';


const Home = () => {

    return (
        <div>
            <Header/>
            <Layout>
                <style jsx global>{`
              body {
                font-family: 'Roboto', sans-serif;
              }
            `}</style>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed condimentum, ex quis consequat varius,
                libero enim malesuada mi, eu faucibus mi ante at lectus. Sed semper neque ut nulla facilisis vulputate.
                Morbi non mi ultrices, aliquam purus id, tincidunt orci. Etiam convallis ex pulvinar, faucibus elit eu,
                feugiat odio. Praesent pellentesque turpis orci, sit amet gravida neque interdum eget. Etiam eu tortor
                blandit tellus cursus semper. Aenean aliquet pellentesque aliquet. Sed eleifend quis quam ac posuere.
                Proin malesuada turpis et nisl volutpat, ac rhoncus arcu lobortis.
            </Layout>
        </div>
    );
};

export default Home;
