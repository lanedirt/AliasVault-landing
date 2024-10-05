const ComingSoon = () => {
  return (
    <section className="pt-16 md:pt-20 lg:pt-28 pb-16 md:pb-20 lg:pb-28">
      <div className="container">
        <div className="flex flex-col items-center justify-center text-center">
          <div className="relative">
            <p className="mt-8 text-base text-body-color">
              Until the documentation website is finished, you can find instructions on how to use AliasVault on our{" "}
              <a
                href="https://github.com/your-github-repo-url"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                GitHub repository
              </a>
              ,
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComingSoon;
