import { connect } from "react-redux";


export interface IProfileHeaderProps {
    identity: any;
}


export function ProfileHeader(props) {
    const { identity } = props;
    return (
        <div className="flex justify-center">
            <div className=" flex border-[1px] border-white/20 bg-customize-button/70 w-full h-[200px] rounded-lg">
                <div className=" bg-[url('/card2.jpg')] border-1 rounded-full w-24 h-24 my-[50px] ml-20">

                </div>
                <div>
                    <p className=" mt-12 ml-12 text-2xl text-white">
                        {identity.firstName} {identity.lastName}
                    </p>
                    <p className="flex mt-5 ml-12">

                        <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" viewBox="0 0 14 14" role="img">
                            <path fillRule="evenodd" d="M4.856 4.9c0 1.183.928 2.103 2.124 2.103 1.23 0 2.164-.907 2.162-2.102-.001-1.19-.93-2.096-2.154-2.098C5.79 2.801 4.856 3.72 4.856 4.9m2.14 9.1c-.09-.116-.17-.22-.25-.326-1.137-1.507-2.214-3.053-3.16-4.684-.517-.89-.996-1.802-1.328-2.779-.561-1.652-.181-3.133.9-4.453C3.998.737 5.123.181 6.449.032c2.35-.266 4.57 1.128 5.302 3.327.203.611.3 1.24.225 1.884-.06.51-.227.991-.418 1.465-.411 1.018-.947 1.973-1.52 2.91a49.947 49.947 0 01-2.96 4.284l-.08.097" fill="#ca8a04">

                            </path>
                        </svg>
                        <p className="text-yellow-600 ml-1">
                            {identity.location}
                        </p>
                    </p>
                </div>
                <div className="text-white text-lg ml-16 mt-12">
                    <div>
                        Email: {identity.userEmail}
                    </div>
                    <div>
                        Телефон: {identity.phoneNumber}
                    </div>
                    <div>
                        {identity.role}
                    </div>
                </div>

            </div>
        </div>
    )
}


const mapStateToProps = (state, props) => {
    const identity = state.identity;
    return {
        identity
    };
}

export default connect(mapStateToProps, {})(ProfileHeader);