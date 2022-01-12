import { Pagination } from "components/Pagination";
import { MovieCard } from "components/MovieCard";

export function Listing() {
    return (
        <>
            <Pagination />
            <div className="container">
                <div className="row">
                    <div className="col-xl-4 col-md-6 col-sm-12 mb-3">
                        <MovieCard />
                    </div>
                    <div className="col-xl-4 col-md-6 col-sm-12 mb-3">
                        <MovieCard />
                    </div>
                    <div className="col-xl-4 col-md-6 col-sm-12 mb-3">
                        <MovieCard />
                    </div>
                    <div className="col-xl-4 col-md-6 col-sm-12 mb-3">
                        <MovieCard />
                    </div>
                    <div className="col-xl-4 col-md-6 col-sm-12 mb-3">
                        <MovieCard />
                    </div>
                    <div className="col-xl-4 col-md-6 col-sm-12 mb-3">
                        <MovieCard />
                    </div>
                </div>
            </div>
        </>
    );
}