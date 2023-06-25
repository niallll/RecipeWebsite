using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace RankingApp.Migrations
{
    /// <inheritdoc />
    public partial class RecipeMacrontrition : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "Carbs",
                table: "Recipes",
                type: "integer",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<int>(
                name: "Protein",
                table: "Recipes",
                type: "integer",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<int>(
                name: "Saturates",
                table: "Recipes",
                type: "integer",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<int>(
                name: "Sugars",
                table: "Recipes",
                type: "integer",
                nullable: false,
                defaultValue: 0);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Carbs",
                table: "Recipes");

            migrationBuilder.DropColumn(
                name: "Protein",
                table: "Recipes");

            migrationBuilder.DropColumn(
                name: "Saturates",
                table: "Recipes");

            migrationBuilder.DropColumn(
                name: "Sugars",
                table: "Recipes");
        }
    }
}
