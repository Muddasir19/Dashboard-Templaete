import React from "react";
import DashboardLayout from "../../components/DashboardLayout";
import PortfolioSection from "./components/PortfolioSection";
import PriceSection from "./components/PriceSection";
import { Box, Grid, GridItem } from "@chakra-ui/react";
import Transaction from "./components/Transaction";
import InfoCard from "./components/InfoCard";

const Dashboard = () => {
  return (
    <DashboardLayout title="Dashboard">
      <Grid
      gridTemplateColumns={{
        base:"repeat(1, 1fr)",
        xl:"repeat(2, 2fr)"
      }}
      gap="6"
      >
        <GridItem colSpan={{
          base:1,
          xl:2,
        }} >
          <PortfolioSection />
        </GridItem>
        <GridItem colSpan={1}>
          <PriceSection />
        </GridItem>
        <GridItem colSpan={1}>
          <Transaction/>
        </GridItem>
        <GridItem colSpan={1}>
          <InfoCard 
          tagText="Loan"
          imgURL="/Visual1.svg"
          text="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis, officia!"
          />
        </GridItem>
        <GridItem colSpan={1}>
          <InfoCard 
          inverted
          tagText="Contact"
          imgURL="/Visual.svg"
          text="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis, officia!Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis, officia!"
          />
        </GridItem>
      </Grid>
    </DashboardLayout>
  );
};

export default Dashboard;
