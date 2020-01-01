import './hello.scss';
export const hello = (str = false) => {
    console.log(str || 'hello');
}

