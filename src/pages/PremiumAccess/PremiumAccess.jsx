import React from 'react';
import shopping from '../../assets/images/shopping.png';
import { toast } from 'react-hot-toast';


const PremiumAccess = () => {
    return (
        <div>
            <div className="max-w-xs mx-auto rounded-md shadow-md dark:bg-gray-900 dark:text-yellow-500">
                <img src={shopping} alt="" className="object-cover object-center w-full rounded-t-md h-72 bg-gray-100" />
                <div className="flex flex-col justify-between p-6 space-y-8">
                    <div className="space-y-2">
                        <h2 className="text-3xl font-semibold tracking-wide">Get Premium Access !</h2>
                        <p className="dark:text-gray-100">Tap the button bellow to get it !</p>
                    </div>
                    <button onClick={() => toast.success('Welcome To Premium Access user !')} type="button" className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md dark:bg-yellow-400 dark:text-gray-900">Buy Premium</button>
                </div>
            </div>
        </div>
    );
};

export default PremiumAccess;