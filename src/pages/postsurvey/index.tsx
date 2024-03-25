import { SyntheticEvent, ChangeEvent, useEffect, useState } from "react";
import {
	FormControl,
	FormControlLabel,
	RadioGroup,
	Radio,
	FormLabel,
	Button,
	Box,
	TextField,
	Typography,
	Container,
	InputLabel,
	Paper,
	Divider,
	Input,
} from "@mui/material";

interface FormContent {
	"post-2": string;
	"post-3": string;
	"post-4-1": string;
	"post-4-2": string;

	"post-5-1": string;
	"post-5-2": string;

	"post-6-1": string;
	"post-6-2": string;

	"post-7-1": string;
	"post-7-2": string;

	"post-8-1": string;
	"post-8-2": string;
	"post-9-1": string;
	"post-9-2": string;
	"post-10-1": string;
	"post-10-2": string;

	"post-11": string;
	"post-12": string;

	"text-answer": TextContent;
}

interface TextContent {
	age: string;
	q1: string;
	q2: string;
	q3: string;
}

const PostSurvey = () => {
	const [data, setData] = useState<FormContent>();
	const [textValues, setTextValues] = useState<TextContent>({
		age: "",
		q1: "",
		q2: "",
		q3: "",
	});

	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;

		setTextValues({
			...textValues,
			[name]: value,
		});
	};

	const handleSubmit = (e: SyntheticEvent) => {
		e.preventDefault();
		const target = e.target as typeof e.target & {
			"post-2": { value: string };
			"post-3": { value: string };
			"post-4-1": { value: string };
			"post-5-1": { value: string };
			"post-6-1": { value: string };
			"post-7-1": { value: string };
			"post-8-1": { value: string };
			"post-9-1": { value: string };
			"post-10-1": { value: string };

			"post-4-2": { value: string };
			"post-5-2": { value: string };
			"post-6-2": { value: string };
			"post-7-2": { value: string };
			"post-8-2": { value: string };
			"post-9-2": { value: string };
			"post-10-2": { value: string };
			"post-11": { value: string };
			"post-12": { value: string };
		};

		setData({
			"post-2": target["post-2"].value,
			"post-3": target["post-3"].value,
			"post-4-1": target["post-4-1"].value,
			"post-5-1": target["post-5-1"].value,
			"post-6-1": target["post-6-1"].value,
			"post-7-1": target["post-7-1"].value,
			"post-8-1": target["post-8-1"].value,
			"post-9-1": target["post-9-1"].value,
			"post-10-1": target["post-10-1"].value,
			"post-4-2": target["post-4-2"].value,
			"post-5-2": target["post-5-2"].value,
			"post-6-2": target["post-6-2"].value,
			"post-7-2": target["post-7-2"].value,
			"post-8-2": target["post-8-2"].value,
			"post-9-2": target["post-9-2"].value,
			"post-10-2": target["post-10-2"].value,
			"post-11": target["post-11"].value,
			"post-12": target["post-12"].value,
			"text-answer": textValues,
		});
	};

	useEffect(() => {
		//fetch data
		console.log(textValues);
		console.log(data);
	}, [data]);

	return (
		<Container>
			<Typography align="center" variant="h5" sx={{ m: 5 }}>
				Thank you for completing the tasks. <br /> To better understand your
				experience of the tasks, <br /> please answer the following questions
				based on your reflection.
			</Typography>
			<Box
				component="form"
				onSubmit={handleSubmit}
				sx={{ display: "flex", flexDirection: "column" }}
			>
				<FormControl required sx={{ padding: 3 }}>
					<InputLabel required>1. What is your age?</InputLabel>
					<Input
						type="text"
						value={textValues?.age}
						name="age"
						onChange={handleChange}
					></Input>
				</FormControl>
				<FormControl sx={{ padding: 3 }}>
					<FormLabel>2. What is your gender?</FormLabel>
					<RadioGroup name="post-2">
						<FormControlLabel
							label="Female"
							control={<Radio />}
							value="Female"
						/>
						<FormControlLabel label="Male" control={<Radio />} value="Male" />
						<FormControlLabel
							label={<Input placeholder="Others" />}
							control={<Radio />}
							value="Other (specify)"
						/>
						<FormControlLabel
							label="Prefer not to say"
							control={<Radio />}
							value="Prefer not to say"
						/>
					</RadioGroup>
				</FormControl>

				<FormControl required sx={{ padding: 3 }}>
					<FormLabel>
						3. What is the highest level of school you have completed or the
						highest degree you have received?
					</FormLabel>
					<RadioGroup name="post-3">
						<FormControlLabel
							label="Less than high school degree"
							control={<Radio />}
							value="1"
						/>
						<FormControlLabel
							label="High school degree or equivalent (e.g., GED)"
							control={<Radio />}
							value="2"
						/>

						<FormControlLabel
							label="Some college but no degree"
							control={<Radio />}
							value="3"
						/>
						<FormControlLabel
							label="Associate degree"
							control={<Radio />}
							value="4"
						/>
						<FormControlLabel
							label="Bachelor degree"
							control={<Radio />}
							value="5"
						/>
						<FormControlLabel
							label="Graduate degree"
							control={<Radio />}
							value="6"
						/>
					</RadioGroup>
				</FormControl>
				<Typography variant="h6" sx={{ mt: 5 }}>
					4. Please read the instruction below, and answer 4-1 and 4-2
					questions.
				</Typography>
				<Paper sx={{ m: 1, p: 2 }} variant="outlined">
					<Typography variant="h5">
						<b>Symptom (sign)</b>
					</Typography>
					<Typography
						mt={2}
						mb={2}
						sx={{ fontSize: "18px", fontWeight: 600, color: "#0E7490" }}
					>
						Definition
					</Typography>
					<Typography sx={{ fontSize: "18px" }}>
						An objective evidence of diseases perceptible to a doctor and
						subjective evidence of disease perceived by a patient from the
						patient. Based on symptoms, doctors are able to judge patients'
						conditions or diseases.
					</Typography>
					<Typography
						mt={2}
						mb={2}
						sx={{ fontSize: "18px", fontWeight: 600, color: "#0E7490" }}
					>
						Annotation examples
					</Typography>
					<ul>
						<Typography sx={{ fontSize: "18px" }}>
							The patient has had increasing{" "}
							<span style={{ backgroundColor: "#CFFAFE" }}>
								dyspnea on exertion
							</span>
						</Typography>
					</ul>
					<ul>
						<Typography sx={{ fontSize: "18px" }}>
							<span style={{ backgroundColor: "#CFFAFE" }}>the wound</span> was
							noted to be clean with{" "}
							<span style={{ backgroundColor: "#CFFAFE" }}>
								mild serous drainage
							</span>
						</Typography>
					</ul>
				</Paper>
				<Box flexDirection={"row"} sx={{ padding: 3, display: "flex" }}>
					<Box sx={{ maxWidth: "50%" }}>
						<FormControl required sx={{ padding: 3 }}>
							<FormLabel>
								4-1. How clearly do you understand this instruction to annotate
								data associate with <b>symptoms and medical terminologies</b>?
							</FormLabel>

							<RadioGroup name="post-4-1">
								<FormControlLabel
									label="Extremely not understanable"
									control={<Radio />}
									value="1"
								/>
								<FormControlLabel
									label="Moderately not understanable"
									control={<Radio />}
									value="2"
								/>
								<FormControlLabel
									label="Slightly not understanable"
									control={<Radio />}
									value="3"
								/>
								<FormControlLabel
									label="Nor understandable nor not understanable"
									control={<Radio />}
									value="4"
								/>
								<FormControlLabel
									label="Slightly understandable"
									control={<Radio />}
									value="5"
								/>
								<FormControlLabel
									label="Moderately understandable"
									control={<Radio />}
									value="6"
								/>
								<FormControlLabel
									label="Extremely understandable"
									control={<Radio />}
									value="7"
								/>
							</RadioGroup>
						</FormControl>
					</Box>
					<Box sx={{ maxWidth: "50%" }}>
						<FormControl required sx={{ padding: 3 }}>
							<FormLabel>
								4-2. Based on the instruction, how confident are you in
								annotating symptoms/signs or relevant terminologies in a
								document?
							</FormLabel>
							<RadioGroup name="post-4-2">
								<FormControlLabel
									label="Extremely unconfident"
									control={<Radio />}
									value="1"
								/>
								<FormControlLabel
									label="Moderately unconfident"
									control={<Radio />}
									value="2"
								/>
								<FormControlLabel
									label="Slightly unconfident"
									control={<Radio />}
									value="3"
								/>
								<FormControlLabel
									label="Nor confident nor unconfident"
									control={<Radio />}
									value="4"
								/>
								<FormControlLabel
									label="Slightly confident"
									control={<Radio />}
									value="5"
								/>
								<FormControlLabel
									label="Moderately confident"
									control={<Radio />}
									value="6"
								/>
								<FormControlLabel
									label="Extremely confident"
									control={<Radio />}
									value="7"
								/>
							</RadioGroup>
						</FormControl>
					</Box>
				</Box>
				<Typography variant="h6" sx={{ mt: 5 }}>
					5. Please read the instruction below, and answer 5-1 and 5-2
					questions.
				</Typography>
				<Paper sx={{ m: 1, p: 2 }} variant="outlined">
					<Typography variant="h5">
						<b>Lab Value</b>
					</Typography>
					<Typography
						mt={2}
						mb={2}
						sx={{ fontSize: "18px", fontWeight: 600, color: "#0E7490" }}
					>
						Definition
					</Typography>
					<Typography sx={{ fontSize: "18px" }}>
						The value obtained from various laboratory tests conducted on
						samples such as blood, urine, or tissue. It is used by a doctor to
						diagnose and monitor medical conditions, assess overall health
						conditions, and guide treatment decisions.
					</Typography>
					<Typography
						mt={2}
						mb={2}
						sx={{ fontSize: "18px", fontWeight: 600, color: "#0E7490" }}
					>
						Annotation examples
					</Typography>
					<ul>
						<Typography sx={{ fontSize: "18px" }}>
							White blood cell
							<span style={{ backgroundColor: "#CFFAFE" }}>3.0</span>,
							hemoglobin{" "}
							<span style={{ backgroundColor: "#CFFAFE" }}>13.9,</span>, and
							lymphocytes <span style={{ backgroundColor: "#CFFAFE" }}>48</span>
						</Typography>
					</ul>
				</Paper>
				<Box flexDirection={"row"} sx={{ padding: 3, display: "flex" }}>
					<Box sx={{ maxWidth: "50%" }}>
						<FormControl required sx={{ padding: 3 }}>
							<FormLabel>
								5-1. How clearly do you understand this instruction to annotate
								data associate with <b>Lab value</b>?
							</FormLabel>
							<RadioGroup name="post-5-1">
								<FormControlLabel
									label="Extremely not understanable"
									control={<Radio />}
									value="1"
								/>
								<FormControlLabel
									label="Moderately not understanable"
									control={<Radio />}
									value="2"
								/>
								<FormControlLabel
									label="Slightly not understanable"
									control={<Radio />}
									value="3"
								/>
								<FormControlLabel
									label="Nor understandable nor not understanable"
									control={<Radio />}
									value="4"
								/>
								<FormControlLabel
									label="Slightly understandable"
									control={<Radio />}
									value="5"
								/>
								<FormControlLabel
									label="Moderately understandable"
									control={<Radio />}
									value="6"
								/>
								<FormControlLabel
									label="Extremely understandable"
									control={<Radio />}
									value="7"
								/>
							</RadioGroup>
						</FormControl>
					</Box>
					<Box sx={{ maxWidth: "50%" }}>
						<FormControl required sx={{ padding: 3 }}>
							<FormLabel>
								5-2. Based on the instruction above, how confident are you in
								annotating <b>lab value</b> fields in a document?
							</FormLabel>

							<RadioGroup name="post-5-2">
								<FormControlLabel
									label="Extremely unconfident"
									control={<Radio />}
									value="1"
								/>
								<FormControlLabel
									label="Moderately unconfident"
									control={<Radio />}
									value="2"
								/>
								<FormControlLabel
									label="Slightly unconfident"
									control={<Radio />}
									value="3"
								/>
								<FormControlLabel
									label="Nor confident nor unconfident"
									control={<Radio />}
									value="4"
								/>
								<FormControlLabel
									label="Slightly confident"
									control={<Radio />}
									value="5"
								/>
								<FormControlLabel
									label="Moderately confident"
									control={<Radio />}
									value="6"
								/>
								<FormControlLabel
									label="Extremely confident"
									control={<Radio />}
									value="7"
								/>
							</RadioGroup>
						</FormControl>
					</Box>
				</Box>
				<Typography variant="h6" sx={{ mt: 5 }}>
					6. Please read the instruction below, and answer 6-1 and 6-2
					questions.
				</Typography>
				<Paper sx={{ m: 1, p: 2 }} variant="outlined">
					<Typography variant="h5">
						<b>Diagnostic_procedure</b>
					</Typography>
					<Typography
						mt={2}
						mb={2}
						sx={{ fontSize: "18px", fontWeight: 600, color: "#0E7490" }}
					>
						Definition
					</Typography>
					<Typography sx={{ fontSize: "18px" }}>
						A test used to help figure out what disease or condition a person
						has based on their signs and symptoms. It may also be used to help
						plan treatment, find out how well treatment is working, and make a
						prognosis.
					</Typography>
					<Typography
						mt={2}
						mb={2}
						sx={{ fontSize: "18px", fontWeight: 600, color: "#0E7490" }}
					>
						Annotation examples
					</Typography>
					<ul>
						<Typography sx={{ fontSize: "18px" }}>
							There is drainage of pus and hence{" "}
							<span style={{ backgroundColor: "#CFFAFE" }}>drainage</span> was
							performed.
						</Typography>
					</ul>
				</Paper>
				<Box flexDirection={"row"} sx={{ padding: 3, display: "flex" }}>
					<Box sx={{ maxWidth: "50%" }}>
						<FormControl required sx={{ padding: 3 }}>
							<FormLabel>
								6-1. How clearly do you understand this instruction to annotate
								data associate with <b>Diagnostic procedure</b>?
							</FormLabel>
							<RadioGroup name="post-6-1">
								<FormControlLabel
									label="Extremely not understanable"
									control={<Radio />}
									value="1"
								/>
								<FormControlLabel
									label="Moderately not understanable"
									control={<Radio />}
									value="2"
								/>
								<FormControlLabel
									label="Slightly not understanable"
									control={<Radio />}
									value="3"
								/>
								<FormControlLabel
									label="Nor understandable nor not understanable"
									control={<Radio />}
									value="4"
								/>
								<FormControlLabel
									label="Slightly understandable"
									control={<Radio />}
									value="5"
								/>
								<FormControlLabel
									label="Moderately understandable"
									control={<Radio />}
									value="6"
								/>
								<FormControlLabel
									label="Extremely understandable"
									control={<Radio />}
									value="7"
								/>
							</RadioGroup>
						</FormControl>
					</Box>
					<Box sx={{ maxWidth: "50%" }}>
						<FormControl required sx={{ padding: 3 }}>
							<FormLabel>
								6-2. Based on the instruction above, how confident are you in
								annotating <b>Diagnostic procedure</b> fields in a document?
							</FormLabel>

							<RadioGroup name="post-6-2">
								<FormControlLabel
									label="Extremely unconfident"
									control={<Radio />}
									value="1"
								/>
								<FormControlLabel
									label="Moderately unconfident"
									control={<Radio />}
									value="2"
								/>
								<FormControlLabel
									label="Slightly unconfident"
									control={<Radio />}
									value="3"
								/>
								<FormControlLabel
									label="Nor confident nor unconfident"
									control={<Radio />}
									value="4"
								/>
								<FormControlLabel
									label="Slightly confident"
									control={<Radio />}
									value="5"
								/>
								<FormControlLabel
									label="Moderately confident"
									control={<Radio />}
									value="6"
								/>
								<FormControlLabel
									label="Extremely confident"
									control={<Radio />}
									value="7"
								/>
							</RadioGroup>
						</FormControl>
					</Box>
				</Box>
				<Typography variant="h6" sx={{ mt: 5 }}>
					7. Please read the instruction below, and answer 6-1 and 6-2
					questions.
				</Typography>
				<Paper sx={{ m: 1, p: 2 }} variant="outlined">
					<Typography variant="h5">
						<b>Medication</b>
					</Typography>
					<Typography
						mt={2}
						mb={2}
						sx={{ fontSize: "18px", fontWeight: 600, color: "#0E7490" }}
					>
						Definition
					</Typography>
					<Typography sx={{ fontSize: "18px" }}>
						A list of medications that contains drugs, drug instructions, or
						other preparations.
					</Typography>
					<Typography
						mt={2}
						mb={2}
						sx={{ fontSize: "18px", fontWeight: 600, color: "#0E7490" }}
					>
						Annotation examples
					</Typography>
					<ul>
						<Typography sx={{ fontSize: "18px" }}>
							<span style={{ backgroundColor: "#CFFAFE" }}>Fluticasone</span>/
							<span style={{ backgroundColor: "#CFFAFE" }}>vilanterol</span> is
							a combination drug and its trade name is Breo Ellipta. dyspnea on
							exertion
						</Typography>
					</ul>
				</Paper>
				<Box flexDirection={"row"} sx={{ padding: 3, display: "flex" }}>
					<Box sx={{ maxWidth: "50%" }}>
						<FormControl required sx={{ padding: 3 }}>
							<FormLabel>
								7-1. How clearly do you understand this instruction to annotate
								data associate with <b>Medication</b> ?
							</FormLabel>
							<RadioGroup name="post-7-1">
								<FormControlLabel
									label="Extremely not understanable"
									control={<Radio />}
									value="1"
								/>
								<FormControlLabel
									label="Moderately not understanable"
									control={<Radio />}
									value="2"
								/>
								<FormControlLabel
									label="Slightly not understanable"
									control={<Radio />}
									value="3"
								/>
								<FormControlLabel
									label="Nor understandable nor not understanable"
									control={<Radio />}
									value="4"
								/>
								<FormControlLabel
									label="Slightly understandable"
									control={<Radio />}
									value="5"
								/>
								<FormControlLabel
									label="Moderately understandable"
									control={<Radio />}
									value="6"
								/>
								<FormControlLabel
									label="Extremely understandable"
									control={<Radio />}
									value="7"
								/>
							</RadioGroup>
						</FormControl>
					</Box>
					<Box sx={{ maxWidth: "50%" }}>
						<FormControl required sx={{ padding: 3 }}>
							<FormLabel>
								7-2. Based on the instruction above, how confident are you in
								annotating <b>Medication</b> in a document?
							</FormLabel>

							<RadioGroup name="post-7-2">
								<FormControlLabel
									label="Extremely unconfident"
									control={<Radio />}
									value="1"
								/>
								<FormControlLabel
									label="Moderately unconfident"
									control={<Radio />}
									value="2"
								/>
								<FormControlLabel
									label="Slightly unconfident"
									control={<Radio />}
									value="3"
								/>
								<FormControlLabel
									label="Nor confident nor unconfident"
									control={<Radio />}
									value="4"
								/>
								<FormControlLabel
									label="Slightly confident"
									control={<Radio />}
									value="5"
								/>
								<FormControlLabel
									label="Moderately confident"
									control={<Radio />}
									value="6"
								/>
								<FormControlLabel
									label="Extremely confident"
									control={<Radio />}
									value="7"
								/>
							</RadioGroup>
						</FormControl>
					</Box>
				</Box>
				<Typography variant="h6" sx={{ mt: 5 }}>
					8. Please read the description below, and answer 8-1 and 8-2
					questions.
				</Typography>
				<Paper sx={{ m: 1, p: 2 }} variant="outlined">
					<Typography variant="h5">
						<b>Biological Structures</b>
					</Typography>
					<Typography
						mt={2}
						mb={2}
						sx={{ fontSize: "18px", fontWeight: 600, color: "#0E7490" }}
					>
						Definition
					</Typography>
					<Typography sx={{ fontSize: "18px" }}>
						Biological structures are organs (such as the brain) and systems
						(such as the nervous system) that influence human behavior. These
						can include tissues, cells, organisms that reside within the body
						and even complete organs.
					</Typography>
					<Typography
						mt={2}
						mb={2}
						sx={{ fontSize: "18px", fontWeight: 600, color: "#0E7490" }}
					>
						Annotation examples
					</Typography>
					<ul>
						<Typography sx={{ fontSize: "18px" }}>
							Small lymph nodes are diffused in the{" "}
							<span style={{ backgroundColor: "#CFFAFE" }}>right lung</span>
						</Typography>
					</ul>
					<ul>
						<Typography sx={{ fontSize: "18px" }}>
							The patient has{" "}
							<span style={{ backgroundColor: "#CFFAFE" }}>chest</span> and{" "}
							<span style={{ backgroundColor: "#CFFAFE" }}>abdominal</span> pain
						</Typography>
					</ul>
				</Paper>
				<Box flexDirection={"row"} sx={{ padding: 3, display: "flex" }}>
					<Box sx={{ maxWidth: "50%" }}>
						<FormControl required sx={{ padding: 3 }}>
							<FormLabel>
								8-1. How clearly do you understand this instruction to annotate
								data associate with <b>Biological Structures</b>?
							</FormLabel>
							<RadioGroup name="post-8-1">
								<FormControlLabel
									label="Extremely not understanable"
									control={<Radio />}
									value="1"
								/>
								<FormControlLabel
									label="Moderately not understanable"
									control={<Radio />}
									value="2"
								/>
								<FormControlLabel
									label="Slightly not understanable"
									control={<Radio />}
									value="3"
								/>
								<FormControlLabel
									label="Nor understandable nor not understanable"
									control={<Radio />}
									value="4"
								/>
								<FormControlLabel
									label="Slightly understandable"
									control={<Radio />}
									value="5"
								/>
								<FormControlLabel
									label="Moderately understandable"
									control={<Radio />}
									value="6"
								/>
								<FormControlLabel
									label="Extremely understandable"
									control={<Radio />}
									value="7"
								/>
							</RadioGroup>
						</FormControl>
					</Box>
					<Box sx={{ maxWidth: "50%" }}>
						<FormControl required sx={{ padding: 3 }}>
							<FormLabel>
								8-2. Based on the instruction above, how confident are you in
								annotating <b>Biological structures</b> in a document?
							</FormLabel>

							<RadioGroup name="post-8-2">
								<FormControlLabel
									label="Extremely unconfident"
									control={<Radio />}
									value="1"
								/>
								<FormControlLabel
									label="Moderately unconfident"
									control={<Radio />}
									value="2"
								/>
								<FormControlLabel
									label="Slightly unconfident"
									control={<Radio />}
									value="3"
								/>
								<FormControlLabel
									label="Nor confident nor unconfident"
									control={<Radio />}
									value="4"
								/>
								<FormControlLabel
									label="Slightly confident"
									control={<Radio />}
									value="5"
								/>
								<FormControlLabel
									label="Moderately confident"
									control={<Radio />}
									value="6"
								/>
								<FormControlLabel
									label="Extremely confident"
									control={<Radio />}
									value="7"
								/>
							</RadioGroup>
						</FormControl>
					</Box>
				</Box>
				<Typography variant="h6" sx={{ mt: 5 }}>
					9. Please read the instruction below, and answer 9-1 and 9-2
					questions.
				</Typography>
				<Paper sx={{ m: 1, p: 2 }} variant="outlined">
					<Typography variant="h5">
						<b>Clinical event</b>
					</Typography>
					<Typography
						mt={2}
						mb={2}
						sx={{ fontSize: "18px", fontWeight: 600, color: "#0E7490" }}
					>
						Definition
					</Typography>
					<Typography sx={{ fontSize: "18px" }}>
						All those happenings of medical interest which patients undergo
						during a clinical study.
					</Typography>
					<Typography
						mt={2}
						mb={2}
						sx={{ fontSize: "18px", fontWeight: 600, color: "#0E7490" }}
					>
						Annotation examples
					</Typography>
					<ul>
						<Typography sx={{ fontSize: "18px" }}>
							He underwent{" "}
							<span style={{ backgroundColor: "#CFFAFE" }}>
								nephrostomy tube placement
							</span>
							. The nephrostomy tube was removed the next day
						</Typography>
					</ul>
					<ul>
						<Typography sx={{ fontSize: "18px" }}>
							his cancer, her medications,{" "}
							<span style={{ backgroundColor: "#CFFAFE" }}>
								the patient’s surgery
							</span>
							,{" "}
							<span style={{ backgroundColor: "#CFFAFE" }}>
								an appendectomy
							</span>
							, the patient’s tumor.
						</Typography>
					</ul>
				</Paper>
				<Box flexDirection={"row"} sx={{ padding: 3, display: "flex" }}>
					<Box sx={{ maxWidth: "50%" }}>
						<FormControl required sx={{ padding: 3 }}>
							<FormLabel>
								9-1. How clearly do you understand this instruction to annotate
								data associate with <b>Clinical events</b>?
							</FormLabel>
							<RadioGroup name="post-9-1">
								<FormControlLabel
									label="Extremely not understanable"
									control={<Radio />}
									value="1"
								/>
								<FormControlLabel
									label="Moderately not understanable"
									control={<Radio />}
									value="2"
								/>
								<FormControlLabel
									label="Slightly not understanable"
									control={<Radio />}
									value="3"
								/>
								<FormControlLabel
									label="Nor understandable nor not understanable"
									control={<Radio />}
									value="4"
								/>
								<FormControlLabel
									label="Slightly understandable"
									control={<Radio />}
									value="5"
								/>
								<FormControlLabel
									label="Moderately understandable"
									control={<Radio />}
									value="6"
								/>
								<FormControlLabel
									label="Extremely understandable"
									control={<Radio />}
									value="7"
								/>
							</RadioGroup>
						</FormControl>
					</Box>
					<Box sx={{ maxWidth: "50%" }}>
						<FormControl required sx={{ padding: 3 }}>
							<FormLabel>
								9-2. Based on the instruction above, how confident are you in
								annotating <b>Clinical events</b> in a document??
							</FormLabel>

							<RadioGroup name="post-9-2">
								<FormControlLabel
									label="Extremely unconfident"
									control={<Radio />}
									value="1"
								/>
								<FormControlLabel
									label="Moderately unconfident"
									control={<Radio />}
									value="2"
								/>
								<FormControlLabel
									label="Slightly unconfident"
									control={<Radio />}
									value="3"
								/>
								<FormControlLabel
									label="Nor confident nor unconfident"
									control={<Radio />}
									value="4"
								/>
								<FormControlLabel
									label="Slightly confident"
									control={<Radio />}
									value="5"
								/>
								<FormControlLabel
									label="Moderately confident"
									control={<Radio />}
									value="6"
								/>
								<FormControlLabel
									label="Extremely confident"
									control={<Radio />}
									value="7"
								/>
							</RadioGroup>
						</FormControl>
					</Box>
				</Box>
				<Typography variant="h6" sx={{ mt: 5 }}>
					10. Please read the instruction below, and answer 10-1 and 10-2
					questions.
				</Typography>
				<Paper sx={{ m: 1, p: 2 }} variant="outlined">
					<Typography variant="h5">
						<b>Disease disorder</b>
					</Typography>
					<Typography
						mt={2}
						mb={2}
						sx={{ fontSize: "18px", fontWeight: 600, color: "#0E7490" }}
					>
						Definition
					</Typography>
					<Typography sx={{ fontSize: "18px" }}>
						An abnormal condition of a part, organ, or system of an organism
						resulting from various causes, such as infection, inflammation,
						environmental factors, or genetic defect, and characterized by an
						identifiable group of signs, symptoms, or both.
					</Typography>
					<Typography
						mt={2}
						mb={2}
						sx={{ fontSize: "18px", fontWeight: 600, color: "#0E7490" }}
					>
						Annotation examples
					</Typography>
					<ul>
						<Typography sx={{ fontSize: "18px" }}>
							<span style={{ backgroundColor: "#CFFAFE" }}>his cancer</span>,
							her medications, the patient’s surgery, an appendectomy, the
							patient’s tumor.
						</Typography>
					</ul>
					<ul>
						<Typography sx={{ fontSize: "18px" }}>
							Patient was suffering from lung{" "}
							<span style={{ backgroundColor: "#CFFAFE" }}>cancer</span>
						</Typography>
					</ul>
				</Paper>
				<Box flexDirection={"row"} sx={{ padding: 3, display: "flex" }}>
					<Box sx={{ maxWidth: "50%" }}>
						<FormControl required sx={{ padding: 3 }}>
							<FormLabel>
								10-1. How clearly do you understand this instruction to annotate
								data associate with <b>Disease / disorder</b>
							</FormLabel>
							<RadioGroup name="post-10-1">
								<FormControlLabel
									label="Extremely not understanable"
									control={<Radio />}
									value="1"
								/>
								<FormControlLabel
									label="Moderately not understanable"
									control={<Radio />}
									value="2"
								/>
								<FormControlLabel
									label="Slightly not understanable"
									control={<Radio />}
									value="3"
								/>
								<FormControlLabel
									label="Nor understandable nor not understanable"
									control={<Radio />}
									value="4"
								/>
								<FormControlLabel
									label="Slightly understandable"
									control={<Radio />}
									value="5"
								/>
								<FormControlLabel
									label="Moderately understandable"
									control={<Radio />}
									value="6"
								/>
								<FormControlLabel
									label="Extremely understandable"
									control={<Radio />}
									value="7"
								/>
							</RadioGroup>
						</FormControl>
					</Box>
					<Box sx={{ maxWidth: "50%" }}>
						<FormControl required sx={{ padding: 3 }}>
							<FormLabel>
								10-2. Based on the instruction above, how confident are you in
								annotating <b>Disease / disorder</b> in a document?
							</FormLabel>

							<RadioGroup name="post-10-2">
								<FormControlLabel
									label="Extremely unconfident"
									control={<Radio />}
									value="1"
								/>
								<FormControlLabel
									label="Moderately unconfident"
									control={<Radio />}
									value="2"
								/>
								<FormControlLabel
									label="Slightly unconfident"
									control={<Radio />}
									value="3"
								/>
								<FormControlLabel
									label="Nor confident nor unconfident"
									control={<Radio />}
									value="4"
								/>
								<FormControlLabel
									label="Slightly confident"
									control={<Radio />}
									value="5"
								/>
								<FormControlLabel
									label="Moderately confident"
									control={<Radio />}
									value="6"
								/>
								<FormControlLabel
									label="Extremely confident"
									control={<Radio />}
									value="7"
								/>
							</RadioGroup>
						</FormControl>
					</Box>
				</Box>

				<FormControl sx={{ padding: 3 }}>
					<FormLabel required>
						11. Did you find the system, which uses AI to suggest possible
						labels, helpful in completing the annotation tasks?
					</FormLabel>
					<RadioGroup name="post-11">
						<FormControlLabel
							label="Extremely unhelpful"
							control={<Radio />}
							value="1"
						/>
						<FormControlLabel
							label="Moderately unhelpful"
							control={<Radio />}
							value="2"
						/>
						<FormControlLabel
							label="Slightly unhelpful"
							control={<Radio />}
							value="3"
						/>
						<FormControlLabel
							label="Neither unhelpful nor helpful"
							control={<Radio />}
							value="4"
						/>
						<FormControlLabel
							label="Slightly helpful"
							control={<Radio />}
							value="5"
						/>
						<FormControlLabel
							label="Moderately helpful"
							control={<Radio />}
							value="6"
						/>
						<FormControlLabel
							label="Extremly helpful"
							control={<Radio />}
							value="7"
						/>
					</RadioGroup>
					<TextField placeholder="Could you explain why you gave that answer?"></TextField>
				</FormControl>
				<FormControl sx={{ padding: 3 }}>
					<FormLabel required>
						12. Did you find the instruction, which describes meaning and
						examples of each label, helpful in completing the annotation tasks?
					</FormLabel>
					<RadioGroup name="post-12">
						<FormControlLabel
							label="Extremely unhelpful"
							control={<Radio />}
							value="1"
						/>
						<FormControlLabel
							label="Moderately unhelpful"
							control={<Radio />}
							value="2"
						/>
						<FormControlLabel
							label="Slightly unhelpful"
							control={<Radio />}
							value="3"
						/>
						<FormControlLabel
							label="Neither unhelpful nor helpful"
							control={<Radio />}
							value="4"
						/>
						<FormControlLabel
							label="Slightly helpful"
							control={<Radio />}
							value="5"
						/>
						<FormControlLabel
							label="Moderately helpful"
							control={<Radio />}
							value="6"
						/>
						<FormControlLabel
							label="Extremly helpful"
							control={<Radio />}
							value="7"
						/>
					</RadioGroup>
					<TextField placeholder="Could you explain why you gave that answer?"></TextField>
				</FormControl>

				<FormControl required sx={{ padding: 3 }}>
					<Typography variant="h6">
						13. Can you explain general strategies that you made to efficiently
						and correctly annotate data throughout the tasks?
					</Typography>
					<TextField
						margin="normal"
						required
						fullWidth
						multiline
						rows={4}
						type="text"
						name="q1"
						value={textValues?.q1}
						onChange={handleChange}
					/>
				</FormControl>
				<FormControl required sx={{ padding: 3 }}>
					<Typography variant="h6">
						14. Do you have any challenges or difficulties in completing the
						tasks?
					</Typography>
					<TextField
						margin="normal"
						required
						fullWidth
						multiline
						rows={4}
						type="text"
						name="q2"
						value={textValues?.q2}
						onChange={handleChange}
					/>
				</FormControl>
				<FormControl required sx={{ padding: 3 }}>
					<Typography variant="h6">
						15. What additional information or interaction features that support
						system you wish to know or that would have helped you make better
						decisions in tasks?
					</Typography>
					<TextField
						required
						fullWidth
						margin="normal"
						multiline
						rows={4}
						type="text"
						name="q3"
						value={textValues?.q3}
						onChange={handleChange}
					/>
				</FormControl>

				<Button type="submit" variant="outlined" value="Submit">
					Submit
				</Button>
			</Box>
		</Container>
	);
};

export default PostSurvey;
