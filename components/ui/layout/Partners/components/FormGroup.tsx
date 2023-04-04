interface PropsGroup {
  title: string;
  subtitle: string;
  children: any;
}

const FormGroup = ({ title, subtitle, children }: PropsGroup) => {
  return (
    <div className='mt-12'>
      <h3 className='text-xl mb-2'>
        {title} <strong className='text-blue dark:text-blue-light'>*</strong>
      </h3>
      <p className='text-blue dark:text-blue-light'>{subtitle}</p>
      <div className='mt-6'>{children}</div>
    </div>
  );
};

export default FormGroup;
