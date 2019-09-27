import {HeaderBanner} from '../components/header-banner/header-banner';
import * as React from 'react';
import styled from 'styled-components';
import {Layout} from '../components/layout';


const Home = () => {

    return (
        <div>
            <HeaderBanner/>
            <Layout>
                <style jsx global>{`
              body { 
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

const StyleTest = styled.h1`
      color: red;
`;

export default Home;
