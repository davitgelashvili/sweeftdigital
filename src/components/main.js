import { useForm } from "react-hook-form";

function Main(){
    const { register, handleSubmit } = useForm();
    const onSubmit = (data) => {
      localStorage.setItem("value", JSON.stringify(data));
    //   console.log(JSON.parse(localStorage.value));
  
      window.location.href = '/testing';
    };

    return (
        <form className="start" onSubmit={handleSubmit(onSubmit)}>
            <div className="start__item flex-column">
            <span className="start__item--title">Select Category:</span>
            <select className="start__item--select" {...register("category")}>
                <option>Category</option>
                <option value="21">Sports</option>
                <option value="24">politics</option>
            </select>
            </div>

            <div className="start__item flex-column">
            <span className="start__item--title">Select Difficulty:</span>
            <select className="start__item--select" {...register("difficulty")}>
                <option>Difficulty</option>
                <option value="easy">Easy</option>
                <option value="medium">Medium</option>
                <option value="hard">Hard</option>
            </select>
            </div>
            <button type="submit" value="submit" className="btn">START</button>
        </form>
    )
}

export default Main