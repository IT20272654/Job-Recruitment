import { useForm } from "react-hook-form"

const PostJob = () => {


        const {
            register,
            handleSubmit,
            formState: { errors },
          } = useForm()
        
          const onSubmit = (data) => {
            console.log(data)
        };
        
        
    
        return (
            <div className="max-w-screen-2xl container mx-auto xl:px-24 px-4"> 
                <div>
                    <form onSubmit={handleSubmit(onSubmit)}>
                       
                        <input type="submit" />
                    </form>
                </div>
            </div>
        )
    }


export default PostJob