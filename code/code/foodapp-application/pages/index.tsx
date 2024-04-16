import Head from "next/head";
import type {GetStaticProps, InferGetStaticPropsType, NextPage} from "next";

import LocationsList from "components/locations-list";
import dbConnect from "@/middleware/db-connect";
import { findAllLocations } from "@/mongoose/locations/services";
import { LocationType } from "@/mongoose/locations/schema";

const Home: NextPage = (
    props: InferGetStaticPropsType<typeof getStaticProps>
) => {
    const locations: LocationType[] = JSON.parse(props.data?.locations);
    let title = `The Food App`;

    return (
        <div>
            <Head>
                <title>{title}</title>
                <meta name="description" content="The Food App - Home" />
            </Head>

            <h1>Welcome to the Food App!!</h1>
            <LocationsList locations={locations} />
        </div>
    );
};

export const getStaticProps: GetStaticProps = async () => {
    let locations: LocationType[] | [];
    try {
        await dbConnect();
        locations = await findAllLocations();
    } catch (err: any) {
        return {notFound: true};
    }

    return {
        props: {
            data: {locations: JSON.stringify(locations)},
        }
    }
}

export default Home;