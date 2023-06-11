import { useContext } from 'react';
import { authContext } from '../Providers/AuthProviders';
import { useQuery } from '@tanstack/react-query';

const useCart = () =>{
const {user} = useContext(authContext);
const { refetch, data: cart = [] } = useQuery({
    queryKey: ['cart',user?.email],
    queryFn: async ()=>{
        const res = await fetch(`http://localhost:5000/cart?email=${user?.email}`)
        return res.json();
    },
  })
  return [cart,refetch]
}

export default useCart;