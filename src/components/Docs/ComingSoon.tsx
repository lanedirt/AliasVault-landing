const ComingSoon = () => {
  return (
    <section className="pt-16 md:pt-20 lg:pt-28 pb-16 md:pb-20 lg:pb-28">
      <div className="container">
        <div className="max-w-2xl mx-auto p-6 bg-gray-50 border border-gray-200 rounded-lg">
          <div className="flex items-center space-x-2 mb-4">
            <div className="w-2 h-2 bg-primary rounded-full"></div>
            <div className="w-2 h-2 bg-primary rounded-full"></div>
            <div className="w-2 h-2 bg-primary rounded-full"></div>
          </div>
          <blockquote className="text-base text-body-color">
            Until the documentation website is finished, you can find instructions on how to use AliasVault on our{" "}
            <a
              href="https://github.com/lanedirt/aliasvault?tab=readme-ov-file#-aliasvault"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              GitHub repository
            </a>
            .
          </blockquote>
        </div>
      </div>
    </section>
  );
};

export default ComingSoon;
