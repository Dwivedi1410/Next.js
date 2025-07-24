export default async function comment({params}) {
    // console.log(await params);
    const param = await params;
    /*
    Here i will get this as a param :- { blog: 'blog1', comment: 'comment1' }
    */
    return(
        <div>
            <h1>Hello world this is {param.comment} from blog {param.blog}</h1>
        </div>
    )
}