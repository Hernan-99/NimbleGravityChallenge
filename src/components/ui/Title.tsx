interface TitleProps {
  title: string;
  subtitle: string;
}

export const Title = ({ title, subtitle }: TitleProps) => {
  return (
    <div className="text-center mb-8">
      <h1 className="text-5xl font-bold">{title}</h1>

      <p className="text-2xl text-gray-500 mt-2">{subtitle}</p>
    </div>
  );
};
