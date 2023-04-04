import CheckIcon from '@mui/icons-material/Check';

interface PropsRadio {
  text: string;
}

const InputRadio = ({ text }: PropsRadio) => {
  return (
    <div>
      <label className='flex gap-6 bg-gradient-transparent rounded-xl w-[80%] items-center mb-4'>
        <div className='bg-blue-light relative flex justify-center items-center rounded-xl p-2'>
          <div className='w-7 h-7 border-4 border-blue rounded-full' />
          <input type='radio' name='location' className='hidden' />
          <CheckIcon className='text-blue absolute text-base font-bold radio-input' />
        </div>
        <p className='uppercase'>{text}</p>
      </label>
    </div>
  );
};

export default InputRadio;
