interface Props {
  title: string;
  description: string;
  percent: number;
}

const PropertieCard: React.FC<Props> = ({ title, description, percent }) => {
  return (
    <div className='text-center bg-gradient-to-r from-[rgba(255,255,255,0.15)] to-[rgba(255,255,255,0.10)] shadow-lg rounded-xl py-4 flex flex-col gap-4 items-center'>
      <h3 className='text-sm text-blue dark:text-blue-light'>{title}</h3>
      <p className='text-black dark:text-white'>{description}</p>
      <span className='text-gray'>{percent}% have this trait</span>
    </div>
  );
};

export default PropertieCard;
