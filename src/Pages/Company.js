import React, { useEffect, useState } from "react";
import mobilesData from "./mobiles.json";

const CompanyInfo = () => {
  const [awsRegion, setAwsRegion] = useState("Unknown AWS Region");

  useEffect(() => {
    // Fetch AWS region information (replace this with your actual logic)
    const fetchAwsRegion = async () => {
      try {
        // Example: Fetching the AWS region from a data source or API
        const response = await fetch("api/aws/region");
        const data = await response.json();
        setAwsRegion(data.region);
      } catch (error) {
        console.error("Error fetching AWS region:", error);
      }
    };

    fetchAwsRegion();
  }, []);

  return (
    <div className="container">
      <div className="company-info">
        <p>
          Welcome to NEXTURN Company! We are a leading provider of innovative
          solutions in AWS region: {awsRegion}. With our dedication to
          excellence and customer satisfaction, we aim to deliver the best
          services to our clients. Our team of experts is committed to pushing
          boundaries and achieving remarkable results.
        </p>
      </div>
    </div>
  );
};

export default CompanyInfo;

