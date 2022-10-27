import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { SidebarData } from './SidebarData';
import SubMenu from './SubMenu';
import { IconContext } from 'react-icons/lib';
import { useWidthPage } from '../hooks/useWidthPage';

const Nav = styled.div`
  background: #15171c;
  height: 80px;
  margin-left: 260px;
  display: flex;
  position: sticky;
  top: 0;
  justify-content: flex-start;
  align-items: center;

  @media (max-width: 1200px) {
    margin-left: 0;
  }
`;

const NavIcon = styled(Link)`
  margin-left: 2rem;
  font-size: 2rem;
  height: 80px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const SidebarNav = styled.nav`
  background: #15171c;

  width: 250px;
  height: 100vh;
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  left: ${({ sidebar }) => (sidebar ? '0' : '-100%')};
  transition: 350ms;
  z-index: 10;

  @media (min-width: 1200px) {
    left: 0;
  }
`;

const SidebarWrap = styled.div`
  width: 100%;
`;

const Footer = styled.footer`
  background-color: blue;
  margin-left: 260px;
  margin-top: 10px;
  width: 100%;
  height: 80px;

  @media (max-width: 1200px) {
    margin-left: 0;
  }
`;

const Main = styled.main`
  background-color: red;
  margin-left: 260px;
  margin-top: 10px;
  width: 100%;
  min-height: 800px;

  @media (max-width: 1200px) {
    margin-left: 0;
  }
`;

const Sidebar = () => {
  const [sidebar, setSidebar] = useState(false);
  const [isScreenLg] = useWidthPage();

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <Nav>
          <NavIcon to="#">{(isScreenLg && <FaIcons.FaBars onClick={showSidebar} />) || null}</NavIcon>
        </Nav>
        <SidebarNav sidebar={sidebar}>
          <SidebarWrap>
            <NavIcon to="#">{(isScreenLg && <AiIcons.AiOutlineClose onClick={showSidebar} />) || null}</NavIcon>
            {SidebarData.map((item, index) => {
              return <SubMenu item={item} key={index} />;
            })}
          </SidebarWrap>
        </SidebarNav>

        <Main>
          <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
            <li>5</li>
            <li>6</li>
            <li>7</li>
            <li>8</li>
            <li>9</li>
            <li>10</li>
            <li>11</li>
            <li>12</li>
            <li>13</li>
            <li>14</li>
            <li>15</li>
            <li>16</li>
            <li>17</li>
            <li>18</li>
            <li>19</li>
            <li>20</li>
            <li>21</li>
            <li>22</li>
            <li>23</li>
            <li>24</li>
            <li>25</li>
            <li>26</li>
            <li>27</li>
            <li>28</li>
            <li>29</li>
            <li>30</li>
            <li>31</li>
            <li>32</li>
            <li>33</li>
            <li>34</li>
            <li>35</li>
            <li>36</li>
            <li>37</li>
            <li>38</li>
            <li>39</li>
            <li>40</li>
            <li>41</li>
            <li>42</li>
            <li>43</li>
            <li>44</li>
            <li>45</li>
            <li>46</li>
            <li>47</li>
            <li>48</li>
            <li>49</li>
            <li>50</li>
            <li>51</li>
            <li>52</li>
            <li>53</li>
            <li>54</li>
            <li>55</li>
            <li>56</li>
            <li>57</li>
            <li>58</li>
            <li>59</li>
            <li>60</li>
            <li>61</li>
            <li>62</li>
            <li>63</li>
            <li>64</li>
            <li>65</li>
            <li>66</li>
            <li>67</li>
            <li>68</li>
            <li>69</li>
            <li>70</li>
            <li>71</li>
            <li>72</li>
            <li>73</li>
            <li>74</li>
            <li>75</li>
            <li>76</li>
            <li>77</li>
            <li>78</li>
            <li>79</li>
            <li>80</li>
            <li>81</li>
            <li>82</li>
            <li>83</li>
            <li>84</li>
            <li>85</li>
            <li>86</li>
            <li>87</li>
            <li>88</li>
            <li>89</li>
            <li>90</li>
            <li>91</li>
            <li>92</li>
            <li>93</li>
            <li>94</li>
            <li>95</li>
            <li>96</li>
            <li>97</li>
            <li>98</li>
            <li>99</li>
            <li>100</li>
          </ul>
        </Main>

        <Footer>footer</Footer>
      </IconContext.Provider>
    </>
  );
};

export default Sidebar;
