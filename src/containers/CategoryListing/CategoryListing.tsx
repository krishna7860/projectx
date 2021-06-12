import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from "@material-ui/core";
import { Pagination } from "@material-ui/lab";
import Skeleton from "@material-ui/lab/Skeleton";
import React from "react";
import Input from "../../components/Input/Input";
// import StyledLink from "../../components/StyledLink/StyledLink";
import {
  CategoryBanner,
  CategorySeach,
  ScrollDiv,
  Header,
  Container,
  FilterContainer,
  Tag,
  CategoryContainer,
  ListingSection,
  DisplaySection,
  FilterSection,
  HeaderTitle,
} from "./style";
// import CategoryCard from "../../components/CategoryCard/CategoryCard";
import { Category } from "../WelcomeGuide/PickPreferences/PickPreferences.interface";
import CategoryListingCard from "./CategoryListingCard/CategoryListingCard";

const listing = [
  {
    id: 1,
    title: "High price to Low Price",
    value: "lucknow",
  },
  {
    id: 2,
    title: "By Alphabet",
    value: "Kanpur",
  },
  {
    id: 3,
    title: "Low price to High Price",
    value: "Delhi",
  },
  {
    id: 4,
    title: "Descending",
    value: "Haryana",
  },
];

const categories = [
  {
    id: 1,
    title: "Hotels",
    options: "1200",
    slug: "hotels",
    img: "https://images.unsplash.com/photo-1596386461350-326ccb383e9f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aG90ZWxzfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 2,
    title: "Hospitals",
    options: "400",
    slug: "hospitals",
    img: "https://images.unsplash.com/photo-1543968332-f99478b1ebdc?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aG90ZWxzfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 3,
    title: "Restraunt",
    options: "200",
    slug: "restraunt",
    img: "https://images.unsplash.com/photo-1580835845971-a393b73bf370?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8aG90ZWxzfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 3,
    title: "Restraunt",
    options: "200",
    slug: "restraunt",
    img: "https://images.unsplash.com/photo-1580835845971-a393b73bf370?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8aG90ZWxzfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 3,
    title: "Restraunt",
    options: "200",
    slug: "restraunt",
    img: "https://images.unsplash.com/photo-1580835845971-a393b73bf370?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8aG90ZWxzfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
  },
];

const CategoryListing: React.FC = () => {
  const [age, setAge] = React.useState("");

  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setAge(event.target.value as string);
  };

  const loading = false;
  return (
    <div>
      <CategoryBanner />
      <Container>
        <Header>Best Options on Hotels</Header>
        <CategorySeach>
          <Input
            placeholder="Search Catagory"
            icon="https://cdn0.iconfinder.com/data/icons/very-basic-2-android-l-lollipop-icon-pack/24/search-512.png"
          />

          <FilterContainer>
            <FormControl variant="outlined" style={{ width: "100%" }}>
              <InputLabel id="demo-simple-select-outlined-label">
                Sort By
              </InputLabel>
              <Select
                labelId="demo-simple-select-outlined-label"
                id="demo-simple-select-outlined"
                value={age}
                onChange={handleChange}
                label="Sort By"
                style={{ padding: "4px" }}
              >
                {listing.map((option) => (
                  <MenuItem key={option.id} value={option.value}>
                    {option.title}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </FilterContainer>
        </CategorySeach>
        <ScrollDiv>
          <Tag>Hotel</Tag>
          <ListingSection>
            <FilterSection />
            <DisplaySection>
              {categories.map((item) => (
                <CategoryListingCard cardDetails={item} />
              ))}
            </DisplaySection>
          </ListingSection>
        </ScrollDiv>
        <Pagination count={10} variant="outlined" shape="rounded" />
        <HeaderTitle>Similar Options Available</HeaderTitle>
        {/* <CategoryContainer>
          {loading
            ? Array.from(new Array(6)).map((item) => (
                <Box pt={0.5} style={{ width: "200px", margin: "auto" }}>
                  <Skeleton style={{ height: "220px" }} />
                  <Skeleton />
                  <Skeleton width="60%" />
                </Box>
              ))
            : categories.map((category: Category) => (
                <StyledLink to={`/category/${category.slug}/${category.id}`}>
                  <CategoryCard
                    key={category.id}
                    id={category.id}
                    title={category.title}
                    image={category.img}
                    description={category.options}
                  />
                </StyledLink>
              ))}
        </CategoryContainer> */}
      </Container>
    </div>
  );
};

export default CategoryListing;
