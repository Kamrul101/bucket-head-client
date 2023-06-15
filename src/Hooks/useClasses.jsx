
import useAuth from "./useAuth";
import { useQuery } from "@tanstack/react-query";

// const { user, loading } = useAuth();
const useClasses = () =>{
  const {data: classes=[],isLoading: loading, refetch} = useQuery({
    queryKey:['class'],
    
    queryFn: async()=>{
        const res = await fetch('https://summer-school-server-two.vercel.app/class')
        return res.json();
    }
  })
  
  return [classes, loading,refetch];
}

export default useClasses;